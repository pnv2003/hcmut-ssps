import { nanoid } from "nanoid";
import "./../styles/file-upload.css";
import { useEffect, useState } from "react";
import { sendGetRequest } from "../helpers/request";
import dump, { dumpObject } from "../helpers/dump";

export default function FileUpload(props) {
    // sendGetRequest('/admin/config').
    //     then((response))

    // TODO: file upload
    // TODO: get permitted file types, max size

    const [fileTypes, setFileTypes] = useState([]);
    const [maxFileSize, setMaxFileSize] = useState(0);

    useEffect(() => {
        sendGetRequest('/admin/config', 'cannot get config list')
            .then((data) => {
                const initialFileTypes = data.fileTypeList.map((type) => {
                    return {
                        extension: type.fileTypeName
                    };
                });

                setFileTypes(initialFileTypes);
                setMaxFileSize(data.maxFileSize);
            });
    }, []);

    const lessThan = '<';
    

    const permittedFileTypes = fileTypes.map((type) =>
        <span key={`type-${nanoid()}`}>{type.extension.toUpperCase()}</span>
    );

    function handleFileChange(e) {
        // dumpObject(e.target.files, 'filesssssss');


        const fileList = [...e.target.files].map((file) => {
            return { 
                id: `file-${nanoid()}`,
                name: file.name, 
                size: file.size, 
                type: file.type,
                config: {
                    numCopies: 1, 
                    pageSize: 'A4',
                    isLandscape: false,
                    isDoubleSided: false,
                    pageNum: 1
                }
            };
        });

        let checkFileSize = true;
        let checkFileType = true;

        let fileListToAdd = [];

        for (let index = 0; index < fileList.length; index++) {
            const file = fileList[index];
            if (file.size > (1048576 * maxFileSize)) {
                checkFileSize = false;
                window.alert('File "' + file.name + '" is too large(' + file.type / 1048576 +  ' MB)');
                continue;
            }

            const fileSplit = file.name.split('.');
            const fileExtension = fileSplit[fileSplit.length - 1];

            if (!fileTypes.map((type) => type.extension)
                .includes(fileExtension)) {

                checkFileType = false;
                window.alert('Invalid file type of "' + file.name + '": ' + file.type);
                continue;
            }
            fileListToAdd.push(file);
        }

        if (checkFileSize && checkFileType) {
            props.addFiles(fileListToAdd);
        }
    }

    return (
        <div className="file-upload">
            <h2>Tải tài liệu</h2>

            <input type="file" name="file" id="file" multiple
                onChange={handleFileChange}/>

            <div className="file-types">
                {permittedFileTypes}
                <span>{lessThan + ' ' + maxFileSize}MB</span>
            </div>
        </div>
    );
}