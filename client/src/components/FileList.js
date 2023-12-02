import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "nanoid";
import "./../styles/file-list.css";

export default function FileList(props) {
    const pageCountTotal = 20;
    const pageBalance = 50;

    const fileList = props.files.map((file) => 
        <li key={`file-${nanoid()}`} className="file-item">
            <div className="file-detail">
                <p>{file.name}</p>
                <p className={file.status ? 'success' : 'failed'}>
                    {file.status ? 'Tải lên thành công' : 'Tải lên thất bại'}
                </p>
            </div>
            <FontAwesomeIcon icon={faTrashCan} size="2x" />
        </li>
    );

    return (
        <ul className="file-list"> 
            {fileList}
            <div className="page-count">
                <p>Tổng số trang: {pageCountTotal}</p>
                <p>Số trang còn lại: {pageBalance}</p>
            </div>
        </ul>
    );
}