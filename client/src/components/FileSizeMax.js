import { useEffect, useState } from "react"
import sendRequest, { sendGetRequest } from "../helpers/request";
import "./../styles/file-size-max.css";
import Button from "./Button";
import { dumpObject } from "../helpers/dump";

export default function FileSizeMax() {
    const [maxSize, setMaxSize] = useState(0);

    useEffect(() => {
        sendGetRequest('/admin/config', 'cannot get max file size')
            .then((data) => {
                if (data.maxFileSize) {
                    setMaxSize(data.maxFileSize);
                } else {
                    setMaxSize(0);
                }
            });
    }, []);

    function handleSave() {
        sendRequest(
            'POST',
            '/admin/file-size?size=' + maxSize,
            '',
            'cannot set max file size'
        ).then((data) => {

            // assume success
        });
    }

    return (
        <section className="file-size-max"> 
            <h3>Kích thước file tối đa</h3>
            <div className="field">
                <label htmlFor="max-size">Kích thước (MB)</label>
                <input type="number" name="max-size" id="max-size" 
                    value={maxSize}
                    onChange={(e) => {
                        setMaxSize(e.target.value);
                    }}/>
            </div>
            <Button action={handleSave}>
                Lưu
            </Button>
        </section>
    );
}