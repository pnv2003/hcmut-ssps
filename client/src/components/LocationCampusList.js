import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/location.css";
import "./../styles/table.css";
import ButtonIcon from "./ButtonIcon";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function LocationCampusList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cơ sở</th>
                </tr>
            </thead>
            <tbody>
                {props.campuses.map((campus) => {
                    return (
                        <tr key={campus.id}>
                            <td>{campus.id}</td>
                            <td>{campus.name}</td>
                            <td>
                                <ButtonIcon 
                                    action={(e) => {
                                        if (window.confirm('Are you sure you want to delete this item?')) {
                                            props.removeCampus(campus.id);
                                        }
                                    }}
                                    className="delete"
                                >
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </ButtonIcon>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}