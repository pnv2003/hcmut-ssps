import { useEffect, useRef, useState } from "react";
import FileList from "../../components/FileList";
import FileUpload from "../../components/FileUpload";
import StudentHeader from "../../components/StudentHeader";
import "./../../styles/print-doc.css";
import FilePrintProperties from "../../components/FilePrintProperties";
import { nanoid } from "nanoid";
import Button from "../../components/Button";
import sendRequest, { sendGetRequest } from "../../helpers/request";
import dump, { dumpObject } from "../../helpers/dump";
import getOptions from "../../helpers/option";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function PrintDoc() {
    const { getUser } = useAuth();
    const navigate = useNavigate();

    const [printer, setPrinter] = useState('');
    const [files, setFiles] = useState([]);
    const [allPrinters, setAllPrinters] = useState([]);
    const [currentFile, setCurrentFile] = useState(null);

    const pageCount = useRef(0);
    const [pageBalance, setPageBalance] = useState(0);

    useEffect(() => {
        sendGetRequest('/admin/printer', 'cannot get printer list')
            .then((data) => {
                const initialPrinters = data.map((p) => {
                    return {
                        id: p.id,
                        room: p.room.roomName,
                        building: p.room.building.buildingName,
                        campus: p.room.building.campus.campusName
                    };
                });

                setAllPrinters(initialPrinters);
            });


            sendGetRequest('/student/' + getUser().id + '/info', 'cannot get student info')
                .then((data) => {
                    setPageBalance(data.balance);
                });
    }, []);

    function countA4Pages(fileList) {
        let pageCount = 0;
        for (let index = 0; index < fileList.length; index++) {
            const file = fileList[index];

            let pageNumA4 = file.config.pageNum;

            switch (file.config.pageSize) {
                case "A1": 
                    pageNumA4 *= 8;
                    break;
                case "A2":
                    pageNumA4 *= 4;
                    break;
                case "A3":
                    pageNumA4 *= 2;
                    break;
                case "A5":
                    if (pageNumA4 % 2 === 0) {
                        pageNumA4 /= 2;
                    } else {
                        pageNumA4 += 1;
                        pageNumA4 /= 2;
                    }
                    break;
                default:
                    break;
            }

            pageCount += pageNumA4 * file.config.numCopies;
        }
        return pageCount;
    }

    function addFiles(newFiles) {
        const newFileList = files.concat(newFiles);

        pageCount.current = countA4Pages(newFileList);
        setFiles(newFileList);
    }

    function editFileConfig(id, newConfig) {

        // apply all
        if (id === null) {
            const editedFiles = files.map((file) => {
                return {...file, config: newConfig};
            });

            pageCount.current = countA4Pages(editedFiles);
            setFiles(editedFiles);
            return;
        }

        // apply id only
        const editedFiles = files.map((file) => {
            if (id === file.id) {
                return {...file, config: newConfig };
            }
            return file;
        });

        pageCount.current = countA4Pages(editedFiles);
        setFiles(editedFiles);
    }

    function removeFile(id) {
        const remainingFiles = 
            files.filter((file) => (id !== file.id));
        
        pageCount.current = countA4Pages(remainingFiles);
        setFiles(remainingFiles);
    }

    function handleSelect(file) {
        setCurrentFile(file);
    }

    function sendPrintRequest() {
        if (pageCount.current > pageBalance) {
            window.alert('Số trang còn lại không đủ');
            return;
        }

        sendRequest(
            'POST',
            '/student/' + getUser().id + '/print?printer-id=' + printer, 
            files.map((file) => {
                return {
                    fileName: file.name,
                    size: file.size,
                    numOfPages: file.config.pageNum,
                    numOfCopies: file.config.numCopies,
                    isHori: file.config.isLandscape,
                    isDoubleSided: file.config.isDoubleSided,
                    pageSize: file.config.pageSize
                };
            }),
            'cannot send print request'
        );

        navigate('/student/print/success');
    }

    return (
        <div className="print-doc">
            <StudentHeader />
            <main>
                <div className="upper">
                    <div className="left">
                        <FileList files={files} removeFile={removeFile} handleSelect={handleSelect}/>
                        <div className="page-count">
                            <p>Tổng số trang: {pageCount.current}</p>
                            <p>Số trang còn lại: {pageBalance}</p>
                        </div>
                    </div>
                    
                    <div className="config">
                        <FileUpload addFiles={addFiles}/>
                        <FilePrintProperties editFileConfig={editFileConfig} currentFile={currentFile}/>
                        
                    </div>
                </div>
                <div className="lower">
                    <div>
                        <label htmlFor="printer">Chọn máy in</label>
                        <select name="printer" id="printer"
                            value={printer}
                            onChange={(e) => {
                                setPrinter(e.target.value);
                            }}>
                                <option value="null">Chọn máy in</option>
                            {
                                getOptions(
                                    allPrinters.map((p) => {
                                        return{
                                            name: p.room + p.building + '-' + p.campus,
                                            value: p.id
                                        }
                                    })
                                )
                            }
                        </select>
                    </div>
                    <Button 
                        action={sendPrintRequest}
                    >
                        Xác nhận yêu cầu
                    </Button> 
                </div>
            </main>
        </div>
    );
}