import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "nanoid";
import "./../styles/file-list.css";
import { useEffect, useState } from "react";
import { sendGetRequest } from "../helpers/request";
import { useAuth } from "../contexts/AuthContext";
import dump, { dumpObject } from "../helpers/dump";
import ButtonIcon from "./ButtonIcon";

export default function FileList(props) {
    const { getUser } = useAuth();

    const [pageBalance, setPageBalance] = useState(0);

    useEffect(() => {
        sendGetRequest('/student/' + getUser().id + '/info', 'cannot get student info')
            .then((data) => {
                setPageBalance(data.balance);
            });
    }, []);

    function handleDelete(e) {
        props.removeFile(e.currentTarget.parentNode.id);
    }

    const fileList = props.files.map((file) => 
        <li key={file.id} id={file.id}>
            <a href="#" className="file-item"
                onClick={() => { 
                    props.handleSelect(file); 
                }}>
                <div className="file-detail">
                    <p className="filename">{file.name}</p>
                    <p className="info">
                        <span>Kích thước: {(file.size / 1048576).toFixed(2)} (MB)</span>
                        <span>Loại file: {file.type} </span>
                    </p>
                </div>
                <ButtonIcon
                    className="delete"
                    action={handleDelete}
                >
                    <FontAwesomeIcon icon={faTrashCan} size="2x" />
                </ButtonIcon>
            </a>
        </li>
    );

    return (
        <div className="file-list"> 
            <ul className="list">
                {fileList}
            </ul>
            <div className="page-count">
                <p>Tổng số trang: {}</p>
                <p>Số trang còn lại: {pageBalance}</p>
            </div>
        </div>
    );
}