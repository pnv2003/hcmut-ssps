import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './../styles/table.css';
import ButtonIcon from "./ButtonIcon";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function FileTypeList(props) {
    const headers = [
        { name: 'ID', class: 'id'},
        { name: 'Phần mở rộng', class: 'extension'},
        // { name: 'Loại file', class: 'type' }
    ];

    return (
        <table className="table">
            <thead>
                <tr>
                    {headers.map(header => (
                        <th className={header.class} key={header.class}>{header.name}</th>
                    ))}   
                </tr>
            </thead>
            <tbody>
                {props.fileTypes.map((ftype) => {
                    return (
                        <tr key={ftype.id}>
                            {/* <td>{ftype.id[5]}</td> */}
                            <td>{ftype.extension}</td>
                            {/* <td>{ftype.type}</td> */}
                            <td>
                                <ButtonIcon
                                    action={(e) => {
                                        if (window.confirm('Are you sure you want to delete this item?')) {
                                            props.removeFileType(ftype.id);
                                        } 
                                    }}
                                    className="delete"
                                >
                                    <FontAwesomeIcon icon={faTrashCan}/>
                                </ButtonIcon>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}