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

export default function PrintDoc() {
    // TODO: get printer options
    // let campusList = [];
    // let BuildingList = [];
    // let roomList = [];

    const [printer, setPrinter] = useState('');
    const [files, setFiles] = useState([]);
    
    const allPrinters = useRef([]);

    useEffect(() => {
        sendGetRequest('/admin/printer', 'cannot get printer list')
            .then((data) => {
                const initialPrinters = data.map((p) => {
                    // dumpObject(p, '<---printer');

                    return {
                        id: p.id,
                        room: p.room.roomName,
                        building: p.room.building.buildingName,
                        campus: p.room.building.campus.campusName
                    };
                });

                allPrinters.current = initialPrinters; 
            });
    }, []);

    dumpObject(allPrinters.current, 'allPrinters?');

    // const printers = [
    //     { id: 111 },
    //     { id: 222 },
    //     { id: 333 }
    // ];

    

    // TODO: manage file lists
    

    // function addFile(name, status) {
    //     const newFile = {
    //         id: `file-${nanoid()}`,
    //         name: name,
    //         status: status,
    //         config: {
    //             // TODO: initial config   
    //         }
    //     };

    //    setFiles([...files, newFile]);
    // }

    function editFileConfig(id, newConfig) {
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

    function sendPrintRequest() {
        
    }

    return (
        <div className="print-doc">
            <StudentHeader />
            <main>
                <div className="upper">
                    <FileList files={files} removeFile={removeFile}/>
                    <div className="config">
                        <FileUpload setFiles={setFiles}/>
                        <FilePrintProperties editFileConfig={editFileConfig}/>
                        
                    </div>
                </div>
                <div className="lower">
                    <div>
                        <label htmlFor="printer">Chọn máy in</label>
                        <select name="printer" id="printer">
                            {
                                
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