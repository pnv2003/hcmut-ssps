import { useCallback, useState } from "react";
import FileList from "../../components/FileList";
import FileUpload from "../../components/FileUpload";
import StudentHeader from "../../components/StudentHeader";
import "./../../styles/print-doc.css";
import FilePrintProperties from "../../components/FilePrintProperties";
import { nanoid } from "nanoid";
import Button from "../../components/Button";

export default function PrintDoc() {
    const requests = {
        printer: 123,
        userId: 12,
        requestFiles: [
            
        ]
    }

    // TODO: get printer options
    const printers = [
        { id: 111 },
        { id: 222 },
        { id: 333 }
    ];

    const printerOptions = printers.map((printer) => 
        <option value={printer.id}>Gì đó</option>
    );

    const [printer, setPrinter] = useState(printers[0].id);

    // TODO: manage file lists
    const [files, setFiles] = useState(
        [
            { 
                name: 'cnpm.docx', 
                size: 10,
                // status: true, 
                config: {
                    numOfCopies: 1, 
                    pageSize: 'A4',
                    isHori: true,
                    isDoubleSided: false
                }
            },
            { name: 'ssps.txt', status: true},
            { name: 'ssps_2.docx', status: false },
            { name: 'btl.pdf', status: false }
        ]
    );

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


    // send request
    function sendRequest() {

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
                        <label htmlFor="printer">Chọn vị trí máy in</label>
                        <select name="printer" id="printer">
                                {printerOptions}
                        </select>
                    </div>
                    <Button text="Xác nhận yêu cầu" link="#" action={sendRequest}/>
                </div>
            </main>
        </div>
    );
}