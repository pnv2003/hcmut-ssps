import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "nanoid";
import "./../styles/file-list.css";
import { useEffect, useState } from "react";
import { sendGetRequest } from "../helpers/request";
import { useAuth } from "../contexts/AuthContext";
import dump, { dumpObject } from "../helpers/dump";
import ButtonIcon from "./ButtonIcon";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function FileList(props) {
    const { getUser } = useAuth();

    function showInfo(e) {
        const fileId = e.currentTarget.parentNode.parentNode.id;

        let infoElement = document.querySelector('#' + fileId + ' div.info');

        if (infoElement.classList.contains('hidden')) {
            infoElement.classList.remove('hidden')
        } else {
            infoElement.classList.add('hidden');
        }
    }

    function handleDelete(e) {
        props.removeFile(e.currentTarget.parentNode.parentNode.id);
    }

    const fileList = props.files.map((file) => 
        <li key={file.id} id={file.id}>
            <a href="javascript:void(0)" className="file-item"
                onClick={() => { 
                    props.handleSelect(file); 
                }}>
                <div className="file-detail">
                    <p className="filename">{file.name}</p>
                    <div className="info hidden">
                        <ul>
                            <li>Kích thước: {(file.size / 1048576).toFixed(2)} (MB)</li>
                            <li>Loại file: {file.type}</li>
                            <li>Số bản: {file.config.numCopies}</li>
                            <li>Khổ giấy: {file.config.pageSize}</li>
                            <li>{file.config.isDoubleSided ? "In hai mặt" : "In một mặt"}</li>
                            <li>Hướng trang: {file.config.isLandscape ? "Ngang" : "Dọc"}</li>
                            <li>Số trang in: {file.config.pageNum}</li>
                        </ul>
                    </div>
                </div>
                <ButtonIcon action={showInfo}>
                    <FontAwesomeIcon icon={faCircleInfo} />
                </ButtonIcon>
                <ButtonIcon
                    className="delete"
                    action={handleDelete}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </ButtonIcon>
            </a>
        </li>
    );

    return (
        <div className="file-list"> 
            <ul className="list">
                {fileList}
            </ul>
        </div>
    );
}