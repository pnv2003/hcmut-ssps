import { useState } from "react";
import "./../styles/location.css";
import Button from "./Button";
import { nanoid } from "nanoid";

export default function LocationRoomAdd(props) {
    const [room, setRoom] = useState('');

    function handleAddRoom() {
        props.addRoom({
            id: `room-${nanoid()}`,
            name: room
        });
    }

    <section className="location-room-add">
        <h3>Thêm phòng</h3>
        <div className="field">
            <label htmlFor="room">Tên</label>
            <input type="text" name="room" id="room" 
                value={room}
                onChange={(e) => {
                    setRoom(e.target.value);
                }}/>
        </div>
        <Button action={handleAddRoom}>
            Thêm
        </Button>
    </section>
}