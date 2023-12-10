import { useEffect, useState } from "react";
import Button from "../../components/Button";
import "./../../styles/printer-add.css";
import getOptions from "../../helpers/option";
import sendRequest, { sendGetRequest } from "../../helpers/request";
import { useNavigate } from "react-router-dom";
import { dumpObject } from "../../helpers/dump";

export default function PrinterAdd(props) {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
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

                dumpObject(initialBuildings, 'literallyInitBui?');
                setBuildings(initialBuildings);
            });

        sendGetRequest('/admin/room', 'cannot get room list')
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

        setLoading(false);
    }, []);

    // const [id, setId] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [description, setDescription] = useState('');

    // complex shit
    const [campus, setCampus] = useState('');
    const [building, setBuilding] = useState('');
    const [room, setRoom] = useState('');

    const [buildingOptionList, setBuildingOptionList] = useState([]);
    const [roomOptionList, setRoomOptionList] = useState([]);


    function handleSubmit() {
        sendRequest(
            'POST',
            '/admin/printer?room-id=' + room,
            {
                // id: id,
                firm: brand,
                printerName: model,
                // campus: campus,
                // building: building,
                // room: room,
                description: description,
                pageAmount: 10000, // TODO: config
                inkAmount: 100, // TODO: config
                efficiency: 90,
                status: true
            },
            'cannot add printer'
        ).then((data) => {
            if (data) {
                navigate('/admin/printer');
            } else {
                window.alert('This room has already had a printer');
            }
        });
    }

    return (

        <main className="printer-add">
            {
                loading
                    ? (<p>Loading...</p>)
                    : (
                        <>
                        <h1>Thêm máy in mới</h1>
                        <form>
                            {/* <div className="field">
                                <label htmlFor="id">Mã số (ID)</label>
                                <input type="text" name="id" id="id" 
                                    value={id}
                                    onChange={(e) => {
                                        setId(e.target.value);
                                    }}
                                />
                                <small className="error"></small>
                            </div> */}
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
                                        value={campus}
                                        onChange={(e) => {

                                            const newBuildingList = buildings.filter((b) => { 
                                                return b.inCampus == e.target.value;
                                            });
                                            setBuildingOptionList(newBuildingList);

                                            const newRoomList = rooms.filter((r) => {
                                                return (
                                                    r.inBuilding == (newBuildingList[0]?.id ?? '') && 
                                                    !r.havePrinter
                                                );
                                            });


                                            setRoomOptionList(newRoomList);

                                            setCampus(e.target.value);
                                            setBuilding(newBuildingList[0]?.id ?? '');
                                            setRoom(newRoomList[0]?.id ?? '');
                                        }}>
                                        {getOptions(
                                            campuses.map((c) => {
                                                return {
                                                    name: c.name,
                                                    value: c.id
                                                };
                                            })
                                        )}
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="building">Tòa</label>
                                    <select name="building" id="building"
                                        value={building}
                                        onChange={(e) => {
                                            const newRoomList = rooms.filter((r) => {
                                                return (
                                                    r.inBuilding == e.target.value &&
                                                    !r.havePrinter 
                                                );
                                            });
                                            setRoomOptionList(newRoomList);

                                            setBuilding(e.target.value);
                                            setRoom(newRoomList[0]?.id ?? '');
                                        }}>
                                        {getOptions(
                                            buildingOptionList.map((b) => {
                                                return {
                                                    name: b.name,
                                                    value: b.id
                                                };
                                            })
                                        )}
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="room">Phòng</label>
                                    <select name="room" id="room"
                                        value={room} 
                                        onChange={(e) => {
                                            setRoom(e.target.value);
                                        }}>
                                        {getOptions(
                                            roomOptionList.map((r) => {
                                                return {
                                                    name: r.name,
                                                    value: r.id
                                                };
                                            })
                                        )}
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
                    </>
                    )
            }

        </main>
    )
}