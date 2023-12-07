import { useEffect, useRef, useState } from "react";
import FileList from "../../components/FileList";
import FileUpload from "../../components/FileUpload";
import StudentHeader from "../../components/StudentHeader";
import "./../../styles/print-doc.css";
import FilePrintProperties from "../../components/FilePrintProperties";
import { nanoid } from "nanoid";
import Button from "../../components/Button";
import { sendGetRequest } from "../../helpers/request";
import { dumpObject } from "../../helpers/dump";
import getOptions from "../../helpers/option";
import { useAuth } from "../../contexts/AuthContext";

export default function PrintDoc() {
    const { getUser } = useAuth();

    const [printer, setPrinter] = useState('');
    const [files, setFiles] = useState([]);
    const [allPrinters, setAllPrinters] = useState([]);
    const [currentFile, setCurrentFile] = useState(null);


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
    }, []);

    function addFiles(newFiles) {
        setFiles(files.concat(newFiles));
    }

    function editFileConfig(id, newConfig) {
        if (id === null) {
            const editedFiles = files.map((file) => {
                return {...file, config: newConfig};
            });
            setFiles(editedFiles);
            return;
        }

        const editedFiles = files.map((file) => {
            if (id === file.id) {
                return {...file, config: newConfig };
            }
            return file;
        });
        setFiles(editedFiles);
    }

    function removeFile(id) {
        const remainingFiles = 
            files.filter((file) => (id !== file.id));
        
        setFiles(remainingFiles);
    }

    function handleSelect(file) {
        setCurrentFile(file);
    }

    function sendPrintRequest() {
        
    }

    return (
        <div className="print-doc">
            <StudentHeader />
            <main>
                <div className="upper">
                    <FileList files={files} removeFile={removeFile} handleSelect={handleSelect}/>
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
                        link="/student/print/success"
                        action={sendPrintRequest}
                    >
                        Xác nhận yêu cầu
                    </Button> 
                </div>
            </main>
        </div>
    );
}