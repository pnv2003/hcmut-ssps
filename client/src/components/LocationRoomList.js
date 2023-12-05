import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/location.css";
import "./../styles/table.css";
import ButtonIcon from "./ButtonIcon";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function LocationRoomList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Phòng</th>
                </tr>
            </thead>
            <tbody>
                {props.rooms.map((room) => {
                    return (
                        <tr>
                            <td>{room.name}</td>
                            <td>
                                <ButtonIcon 
                                    action={(e) => {
                                        if (window.confirm('Are you sure you want to delete this item?')) {
                                            props.removeRoom(room.id);
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