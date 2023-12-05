import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import LocationCampusAdd from "../../components/LocationCampusAdd";
import sendRequest, { sendGetRequest } from "../../helpers/request";
import LocationCampusList from "../../components/LocationCampusList";
import { Navigate, useNavigate } from "react-router-dom";
import LocationBuildingAdd from "../../components/LocationBuildingAdd";
import LocationBuildingList from "../../components/LocationBuildingList";

export default function ConfigLocation() {
    const [campuses, setCampuses] = useState([]);
    const [buildings, setBuildings] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        sendGetRequest('/admin/campus')
            .then((response) => {
                console.log(response + ' <- response here');

                if (response.ok) {
                    const json = response.json();
                    json.then((data) => {
                        console.log(JSON.stringify(data) + '<- data ');

                        const initialCampuses = data.map((campus) => {
                            return {
                                id: campus.id,
                                name: campus.campusName
                            };
                        });
                        setCampuses(initialCampuses);
                    });
                } else {
                    window.alert('Request failed: cannot get campus list' );
                }
            });

        sendGetRequest('/admin/building') 
            .then((response) => {
                if (response.ok) {
                    const json = response.json();
                    json.then((data) => {
                        const initialBuildings = data.map((building) => {
                            return {
                                id: building.id,
                                name: building.buildingName,
                                inCampus: building.campus.id
                            }
                        });
                        setBuildings(initialBuildings);
                    });
                } else {
                    window.alert('Request failed: cannot get building list');
                }
            });
    }, []);
        
    function addCampus(newCampus) {
        sendRequest(
            'POST',
            '/admin/campus',
            {
                id: newCampus.id,
                campusName: newCampus.name
            }
        ).then((response) => {
            if (response.ok) {
                const json = response.json();
                json.then((data) => {
                    const addedCampus = {
                        id: data.id,
                        name: data.campusName
                    };
                    setCampuses([...campuses, addedCampus]);
                });
            } else {
                window.alert('Request failed: Cannot add campus');
            }
        });
    }

    function removeCampus(id) {
        sendRequest(
            'DELETE',
            '/admin/campus?id=' + id,
            ''
        ).then((response) => {
            if (response.ok) {
                const json = response.json();
                json.then((data) => {
                    if (data.accepted) {
                        const remainingCampuses = campuses.filter((campus) => (id !== campus.id));
                        setCampuses(remainingCampuses);
                    } else {
                        window.alert('Cannot delete this campus!');
                    }
                });
            } else {
                window.alert('Request failed: Cannot delete this item!');
            }
        })
    }

    function addBuilding(newBuilding) {
        console.log(JSON.stringify(newBuilding) + ' <- newBuilding');
        sendRequest(
            'POST',
            '/admin/building?campus-id=' + newBuilding.inCampus,
            {
                id: newBuilding.id,
                buildingName: newBuilding.name
            }
        ).then((response) => {
            if (response.ok) {
                const json = response.json();
                json.then((data) => {
                    const addedBuilding = {
                        id: data.id,
                        name: data.buildingName,
                        inCampus: data.campus.id
                    };
                    setBuildings([...buildings, addedBuilding]);
                });
                
            } else {
                window.alert('Request failed: Cannot add building');
            }
        });
    }

    function removeBuilding(id) {
        sendRequest(
            'DELETE',
            '/admin/building?id=' + id,
            ''
        ).then((response) => {
            if (response.ok) {
                const json = response.json();
                json.then((data) => {
                    if (data.accepted) {
                        const remainingBuildings = buildings.filter((building) => (id !== building.id));
                        setBuildings(remainingBuildings);
                    } else {
                        window.alert('Cannot delete this building!');
                    }
                });
            } else {
                window.alert('Request failed: Cannot delete this item!');
            }
        })
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