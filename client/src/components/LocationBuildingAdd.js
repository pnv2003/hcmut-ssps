import { useState } from "react";
import "./../styles/location.css";
import Button from "./Button";
import { nanoid } from "nanoid";
import getOptions from "../helpers/option";

export default function LocationBuildingAdd(props) {
    const campusOptions = getOptions(
        props.campuses.map((campus) => {
            return {
                name: campus.name,
                value: campus.id
            }
        })
    );

    const [building, setBuilding] = useState('');

    function handleAddBuilding() {
        props.addBuilding({
            id: `building-${nanoid()}`,
            name: building
        });
    }

    return (
        <section className="location-form">
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
                <label htmlFor="building-campus">Cơ sở</label>
                <select name="building-campus" id="building-campus">
                    {campusOptions}
                </select>
            </div>
            <Button action={handleAddBuilding}>
                Thêm
            </Button>
        </section>
    );
    
}