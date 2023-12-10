import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import LocationCampusAdd from "../../components/LocationCampusAdd";
import sendRequest, { sendGetRequest } from "../../helpers/request";
import LocationCampusList from "../../components/LocationCampusList";
import { Navigate, useNavigate } from "react-router-dom";
import LocationBuildingAdd from "../../components/LocationBuildingAdd";
import LocationBuildingList from "../../components/LocationBuildingList";
import LocationRoomAdd from "../../components/LocationRoomAdd";
import LocationRoomList from "../../components/LocationRoomList";
import dump, { dumpObject } from "../../helpers/dump";

export default function ConfigLocation() {
    const [campuses, setCampuses] = useState([]);
    const [buildings, setBuildings] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        sendGetRequest('/admin/campus', 'cannot get campus list')
            .then((data) => {
                const initialCampuses = data.map((campus) => {
                    return {
                        id: campus.id,
                        name: campus.campusName
                    };
                });
                setCampuses(initialCampuses);
            });

        sendGetRequest('/admin/building', 'cannot get building list') 
            .then((data) => {
                const initialBuildings = data.map((building) => {
                    return {
                        id: building.id,
                        name: building.buildingName,
                        inCampus: building.campus.id
                    };
                });
                setBuildings(initialBuildings);
            });

        sendGetRequest('/admin/room')
            .then((data) => {
                const initialRooms = data.map((room) => {
                    return {
                        id: room.id,
                        name: room.roomName,
                        inBuilding: room.building.id,
                        inCampus: room.building.campus.id
                    };
                });
                setRooms(initialRooms);
            });
    }, []);
        
    function addCampus(newCampus) {
        sendRequest(
            'POST',
            '/admin/campus',
            {
                // id: newCampus.id,
                campusName: newCampus.name
            },
            'cannot add campus'
        ).then((data) => {
            const addedCampus = {
                id: data.id,
                name: data.campusName
            };
            setCampuses([...campuses, addedCampus]);
        });
    }

    function removeCampus(id) {
        sendRequest(
            'DELETE',
            '/admin/campus?id=' + id,
            '',
            'cannot remove campus'
        ).then((data) => {
            if (data.accepted) {
                const remainingCampuses = campuses.filter((campus) => (id !== campus.id));
                setCampuses(remainingCampuses);
            } else {
                window.alert('Cannot delete this campus: it still has some buildings inside!');
            }
        });
    }

    function addBuilding(newBuilding) {
        sendRequest(
            'POST',
            '/admin/building?campus-id=' + newBuilding.inCampus,
            {
                // id: newBuilding.id,
                buildingName: newBuilding.name
            },
            'cannot add building'
        ).then((data) => {
            const addedBuilding = {
                id: data.id,
                name: data.buildingName,
                inCampus: data.campus.id
            };
            setBuildings([...buildings, addedBuilding]);
        });
    }

    function removeBuilding(id) {
        sendRequest(
            'DELETE',
            '/admin/building?id=' + id,
            '',
            'cannot remove building'
        ).then((data) => {
            if (data.accepted) {
                const remainingBuildings = buildings.filter((building) => (id !== building.id));
                setBuildings(remainingBuildings);
            } else {
                window.alert('Cannot delete this building: it still has some rooms inside!');
            }
        });
    }

    function addRoom(newRoom) {
        // dumpObject(newRoom, 'newRoom');
        sendRequest(
            'POST',
            '/admin/room?building-id=' + newRoom.inBuilding,
            {
                roomName: newRoom.name
            },
            'cannot add room'
        ).then((data) => {
            // dumpObject(data, 'dataAfterAddRoom');

            const addedRoom = {
                id: data.id,
                name: data.roomName,
                inBuilding: data.building.id,
                inCampus: data.building.campus.id
            }
            setRooms([...rooms, addedRoom]);
        });
    }

    function removeRoom(id) {
        sendRequest(
            'DELETE',
            '/admin/room?id=' + id,
            '',
            'cannot remove room'
        ).then((data) => {
            if (data.accepted) {
                const remainingRooms = rooms.filter((room) => (id !== room.id));
                setRooms(remainingRooms);
            } else {
                window.alert('Cannot remove room: it still has a printer in it');
            }
        });
    }

    return (
        <AdminLayout>
            <article className="config-location">
                <section className="config-location-campus">
                    <LocationCampusAdd addCampus={addCampus} />
                    <LocationCampusList campuses={campuses} removeCampus={removeCampus} />
                </section>
                <section className="config-location-building">
                    <LocationBuildingAdd campuses={campuses} addBuilding={addBuilding} />
                    <LocationBuildingList campuses={campuses} buildings={buildings} removeBuilding={removeBuilding} />
                </section>
                <section className="config-location-room">
                    <LocationRoomAdd campuses={campuses} buildings={buildings} addRoom={addRoom}/>
                    <LocationRoomList campuses={campuses} buildings={buildings} rooms={rooms} removeRoom={removeRoom} />
                </section>
            </article>
        </AdminLayout>
    );
}