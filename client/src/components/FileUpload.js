import { nanoid } from "nanoid";
import "./../styles/file-upload.css";
import sendRequest from "../helpers/request";
// import Dropzone from "react-dropzone-uploader";

export default function FileUpload(props) {
    const maxFileSize = 
        sendRequest(
            'GET',
            '/config',
            ''
        );

    // TODO: file upload
    // TODO: get permitted file types, max size

    const fileTypes = [
        { extension: 'pdf', type: 'application', mime: 'pdf' },
        // { extension: 'doc', type: 'application', mime: 'msword' },
        // { extension: 'docx', type: 'application', mime: 'vnd.openxmlformats-officedocument.wordprocessingml.document' },
        { extension: 'gif', type: 'image', mime: 'gif' },
        { extension: 'jpg', type: 'image', mime: 'jpeg' },
        { extension: 'png', type: 'image', mime: 'png' }
    ]

    const lessThan = '<';
    

    const permittedFileTypes = fileTypes.map((type) =>
        <span key={`type-${nanoid()}`}>{type.extension.toUpperCase()}</span>
    );

    function handleFileChange(e) {
        console.log(JSON.stringify(e.target.files[0]));
        
        const reader = new FileReader();
        const fileInfo = e.target.files[0];
        if (fileInfo) {
            reader.readAsBinaryString(e.target.files[0]);
            reader.onloadend = () => {
                const count = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
                console.log('Number of Pages:', count);
            }
        }


        const fileList = [...e.target.files].map((file) => {
            return { 
                name: file.name, 
                size: file.size, 
                config: {
                    numOfCopies: 1, 
                    pageSize: 'A4',
                    isHori: false,
                    isDoubleSided: false
                }
            };
        });
        
        props.setFiles(fileList);
    }

    return (
        <div className="file-upload">
            <h2>Tải tài liệu</h2>

            <input type="file" name="file" id="file" multiple
                accept="image/*"
                onChange={handleFileChange}/>

            <div className="file-types">
                {permittedFileTypes}
                <span>{lessThan + ' ' + maxFileSize}MB</span>
            </div>
        </div>
    );
}