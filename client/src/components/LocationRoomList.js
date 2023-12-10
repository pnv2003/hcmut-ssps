import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/location.css";
import "./../styles/table.css";
import ButtonIcon from "./ButtonIcon";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { dumpObject } from "../helpers/dump";

export default function LocationRoomList(props) {
    function getCampusName(campusId) {
        const found = props.campuses.filter((campus) => (campus.id === campusId));

        if (!found) {
            window.alert('Fatal error: Campus not found');
            return null;
        } 

        // TODO: not understanding this
        if (!found[0]) {
            window.location.reload();
        }

        return found[0].name;
    }

    function getBuildingName(buildingId) {
        const found = props.buildings.filter((building) => (building.id === buildingId));

        if (!found) {
            window.alert('Fatal error: Building not found');
            return null;
        } 

        // TODO: not understanding this
        if (!found[0]) {
            window.location.reload();
        }

        return found[0].name;
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Cơ sở</th>
                    <th>Tòa</th>
                    <th>Phòng</th>
                </tr>
            </thead>
            <tbody>
                {props.rooms.map((room) => {
                    return (
                        <tr key={room.id}>
                            <td>{getCampusName(room.inCampus)}</td>
                            <td>{getBuildingName(room.inBuilding)}</td>
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