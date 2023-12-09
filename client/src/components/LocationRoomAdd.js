import { useState } from "react";
import "./../styles/location.css";
import Button from "./Button";
import { nanoid } from "nanoid";
import getOptions from "../helpers/option";
import dump, { dumpObject } from "../helpers/dump";

export default function LocationRoomAdd(props) {
    const [room, setRoom] = useState('');
    const [inCampus, setInCampus] = useState("0");
    const [inBuilding, setInBuilding] = useState("0");

    function handleAddRoom() {
        if (inCampus === "0") {
            window.alert("Please select a campus!");
            return;
        }

        if (inBuilding === "0") {
            window.alert("Please select a building");
            return;
        }

        if (room === '') {
            window.alert("Please enter the room name");
            return;
        }

        props.addRoom({
            // id: `room-${nanoid()}`,
            name: room,
            inBuilding: inBuilding
        });
    }

    // TODO: wtf init not shown?
    const initialBuildingOptionList = props.buildings.filter((b) => { 
        // dumpObject(props.campuses, 'initCampuses');
        // dump(b.inCampus, 'bInCampus');
        // dump(props.campuses[0].id, 'idBro?');
        return b.inCampus === props.campuses[0].id;
    });
    // dumpObject(initialBuildingOptionList, 'initBro?');
    const [buildingOptionList, setBuildingOptionList] = useState(initialBuildingOptionList);

    return (
        <section className="config-location-form">
            <h3>Thêm phòng</h3>
            <div className="field">
                <label htmlFor="room">Tên</label>
                <input type="text" name="room" id="room" 
                    value={room}
                    onChange={(e) => {
                        setRoom(e.target.value);
                    }}/>
            </div>
            <div className="field">
                <label htmlFor="room-in-campus">Cơ sở</label>
                <select name="room-in-campus" id="room-in-campus"
                    value={inCampus}
                    onChange={(e) => {
                        const newBuildingList = props.buildings.filter((b) => { 
                            return b.inCampus == e.target.value;
                        });
                        setBuildingOptionList(newBuildingList);
                        setInCampus(e.target.value);
                        setInBuilding(newBuildingList[0].id);
                    }}>
                    <option value="0">-Chọn cơ sở-</option>
                    {
                        getOptions(
                            props.campuses.map((c) => {
                                return {
                                    name: c.name,
                                    value: c.id
                                }
                            })
                        )
                    }
                </select>
            </div>
            <div className="field">
                <label htmlFor="room-in-building">Tòa</label>
                <select name="room-in-building" id="room-in-building"
                    value={inBuilding}
                    onChange={(e) => {
                        setInBuilding(e.target.value);
                    }}>
                    <option value="0">-Chọn tòa</option>
                    {
                        getOptions(
                            buildingOptionList.map((b) => {
                                return {
                                    name: b.name,
                                    value: b.id
                                }
                            })
                        )
                    }
                </select>
            </div>
            <Button action={handleAddRoom}>
                Thêm
            </Button>
        </section>
    );
    
}