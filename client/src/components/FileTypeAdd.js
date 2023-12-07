import { useState } from "react";
import './../styles/button.css';
import './../styles/file-type-add.css';
import getOptions from "../helpers/option";
import Button from "./Button";
import { nanoid } from "nanoid";

export default function FileTypeAdd(props) {
    // const fileTypeTypes = [
    //     { name: 'Văn bản', value: 'text' },
    //     { name: 'Hình ảnh', value: 'image' },
    //     { name: 'Ứng dụng', value: 'application' }
    // ];

    const [extension, setExtension] = useState('');
    // const [type, setType] = useState(fileTypeTypes[0].value);

    function handleAddFileType() {
        props.addFileType({
            // id: `file-${nanoid()}`,
            extension: extension
            // type: type
        });
    }

    return (
        <section className="file-type-add">
            <h3>Thêm định dạng file</h3>
            <div className="field">
                <label htmlFor="extension">Phần mở rộng</label>
                <input type="text" name="extension" id="extension" 
                    value={extension}
                    onChange={(e) => {
                        setExtension(e.target.value);
                    }}/>
            </div>
            {/* <div className="field">
                <label for="type">Loại file</label>
                <select name="type" id="type" 
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value);
                    }}>
                    {getOptions(fileTypeTypes)}
                </select>
            </div> */}
            <Button
                action={handleAddFileType}
            >
                Thêm
            </Button>
        </section>
    );
}