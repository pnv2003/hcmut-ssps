import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/location.css";
import "./../styles/table.css";
import ButtonIcon from "./ButtonIcon";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function LocationBuildingList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Tòa</th>
                </tr>
            </thead>
            <tbody>
                {props.buildings.map((building) => {
                    return (
                        <tr>
                            <td>{building.name}</td>
                            <td>
                                <ButtonIcon 
                                    action={(e) => {
                                        if (window.confirm('Are you sure you want to delete this item?')) {
                                            props.removeBuilding(building.id);
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