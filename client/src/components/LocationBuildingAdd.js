import { useState } from "react";
import "./../styles/location.css";
import Button from "./Button";
import { nanoid } from "nanoid";
import getOptions from "../helpers/option";

export default function LocationBuildingAdd(props) {
    // console.log(JSON.stringify(props.campuses) + ' <- got campuses');

    const campusOptions = getOptions(
        props.campuses.map((campus) => {
            return {
                name: campus.name,
                value: campus.id
            }
        })
    );

    const [building, setBuilding] = useState('');
    const [inCampus, setInCampus] = useState(0);

    console.log(inCampus + ' <- inCampus init');

    function handleAddBuilding() {
        props.addBuilding({
            // id: `building-${nanoid()}`,
            name: building,
            inCampus: inCampus
        });
    }

    return (
        <section className="config-location-form">
            <h3>Thêm tòa</h3>
            <div className="field">
                <label htmlFor="building">Tên</label>
                <input type="text" name="building" id="building" 
                    value={building}
                    onChange={(e) => {
                        setBuilding(e.target.value);
                    }}/>
            </div>
            <div className="field">
                <label htmlFor="building-in-campus">Cơ sở</label>
                <select name="building-in-campus" id="building-in-campus"
                    value={inCampus}
                    onChange={(e) => {
                        setInCampus(e.target.value);
                        console.log(inCampus + ' <- inCampus now');
                    }}>
                    {campusOptions}
                </select>
            </div>
            <Button action={handleAddBuilding}>
                Thêm
            </Button>
        </section>
    );
    
}