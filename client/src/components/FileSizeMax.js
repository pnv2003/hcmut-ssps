import { useState } from "react"
import sendRequest from "../helpers/request";
import "./../styles/file-size-max.css";
import Button from "./Button";

export default function FileSizeMax() {
    // TODO get current config
    const [maxSize, setMaxSize] = useState(0);

    function handleSave() {
        sendRequest(
            'POST',
            '/file-size?size=' + maxSize,
            ''
        );
    }

    return (
        <section className="file-size-max"> 
            <h3>Kích thước file tối đa</h3>
            <div className="field">
                <label for="max-size">Kích thước</label>
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