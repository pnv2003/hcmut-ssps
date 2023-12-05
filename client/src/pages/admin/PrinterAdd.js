import { useState } from "react";
import Button from "../../components/Button";
import "./../../styles/printer-add.css";
import getOptions from "../../helpers/option";

export default function PrinterAdd(props) {
    // test data 
    const campuses = [
        { name: 'CS1 - Cơ sở Lý Thường Kiệt', value: 1 },
        { name: 'CS2 - Cơ sở Dĩ An', value: 2 },
    ];
    const buildings = [
        { name: 'H3', value: 'H3' },
        { name: 'H6', value: 'H6' },
    ];
    const rooms = [
        { name: '114', value: '114' },
        { name: '504', value: '504' }
    ];

    const [id, setId] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [location, setLocation] = useState({
        campus: campuses[0].value,
        building: buildings[0].value,
        room: rooms[0].value
    });
    const [description, setDescription] = useState('');

    function handleSubmit() {
        // TODO
        // if success call: props.addPrinter()
    }

    return (
        <main className="printer-add">
            <h1>Thêm máy in mới</h1>
            <form>
                <div className="field">
                    <label htmlFor="id">Mã số (ID)</label>
                    <input type="text" name="id" id="id" 
                        value={id}
                        onChange={(e) => {
                            setId(e.target.value);
                        }}
                    />
                    <small className="error"></small>
                </div>
                <div className="field">
                    <label htmlFor="brand">Hãng sản xuất</label>
                    <input type="text" name="brand" id="brand" 
                        value={brand}
                        onChange={(e) => {
                            setBrand(e.target.value);
                        }}/>
                </div>
                <div className="field">
                    <label htmlFor="model">Mẫu mã</label>
                    <input type="text" name="model" id="model" 
                        value={model}
                        onChange={(e) => {
                            setModel(e.target.value);
                        }}/>
                </div>
                <fieldset className="location">
                    <legend>Vị trí</legend>
                    <div className="field">
                        <label htmlFor="campus">Cơ sở</label>
                        <select name="campus" id="campus"
                            value={location.campus}
                            onChange={(e) => {
                                setLocation({...location, campus: e.target.value});
                            }}>
                            {getOptions(campuses)}
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="building">Tòa</label>
                        <select name="building" id="building"
                            value={location.building}
                            onChange={(e) => {
                                setLocation({...location, building: e.target.value});
                            }}>
                            {getOptions(buildings)}
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="room">Phòng</label>
                        <select name="room" id="room"
                            value={location.room} 
                            onChange={(e) => {
                                setLocation({...location, room: e.target.value});
                            }}>
                            {getOptions(rooms)}
                        </select>
                    </div>
                </fieldset>
                <div className="field">
                    <label htmlFor="desc">Mô tả</label>
                    <textarea name="description" id="desc"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}>
                    </textarea>
                </div>
                
                <div className="foot">
                    <Button
                        action={handleSubmit}
                    >
                        Xác nhận
                    </Button>
                    <Button className="delete" link={"/admin/printer/"}>
                        Hủy bỏ
                    </Button>
                </div>
            </form>
        </main>
    )
}