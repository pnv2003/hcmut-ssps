import { useState } from "react";
import "./../styles/location.css";
import Button from "./Button";
import { nanoid } from "nanoid";

export default function LocationCampusAdd(props) {
    const [campus, setCampus] = useState('');

    function handleAddCampus() {
        if (campus === "") {
            window.alert("Please enter the campus name");
            return;
        }

        props.addCampus({
            // id: `campus-${nanoid()}`,
            name: campus
        });
    }

    return (
        <section className="config-location-form">
            <h3>Thêm cơ sở</h3>
            <div className="field">
                <label htmlFor="campus">Tên</label>
                <input type="text" name="campus" id="campus" 
                    value={campus}
                    onChange={(e) => {
                        setCampus(e.target.value);
                    }}/>
            </div>
            <Button action={handleAddCampus}>
                Thêm
            </Button>
        </section>
    );   
}