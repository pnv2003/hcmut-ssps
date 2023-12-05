import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import LocationCampusAdd from "../../components/LocationCampusAdd";
import sendRequest, { sendGetRequest } from "../../helpers/request";
import LocationCampusList from "../../components/LocationCampusList";
import { Navigate, useNavigate } from "react-router-dom";
import LocationBuildingAdd from "../../components/LocationBuildingAdd";
import LocationBuildingList from "../../components/LocationBuildingList";

export default function ConfigLocation() {
    const navigate = useNavigate();
    const [campuses, setCampuses] = useState([]);
    const [buildings, setBuildings] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        sendGetRequest('/admin/campus')
            .then((response) => {
            if (response.ok) {
                const json = response.json();
                json.then((data) => {
                    const initialCampuses = data.map((campus) => {
                        return {
                            id: campus.id,
                            name: campus.campusName
                        };
                    });
                    setCampuses(initialCampuses);
                });
            } else {
                console.error('Request failed: cannot get campus list' );
            }
        })
    }, []);
        

    function addCampus(newCampus) {
        sendRequest(
            'POST',
            '/admin/campus',
            {
                // id: newCampus.id,
                campusName: newCampus.name
            }
        ).then((response) => {
            if (response.ok) {
                window.location.reload();
            } else {
                window.alert('REQUEST FAILED: cannot add campus');
            }
        })
    }

    function removeCampus(id) {
        sendRequest(
            'DELETE',
            '/admin/campus?id=' + id,
            ''
        ).then((response) => {
            console.log(JSON.stringify(response) + '<- response');
            if (response.ok) {
                const remainingCampuses = campuses.filter((campus) => (id !== campus.id));
                setCampuses(remainingCampuses);
            } else {
                window.alert('Cannot delete this item!');
            }
        })
    }

    function addBuilding(newBuilding) {

    }

    function removeBuilding(id) {

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
                    <LocationBuildingList buildings={buildings} removeBuilding={removeBuilding}/>
                </section>
            </article>
        </AdminLayout>
    );
}