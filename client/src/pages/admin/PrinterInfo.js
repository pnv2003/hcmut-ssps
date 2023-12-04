import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminLayout from "../../components/AdminLayout";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import './../../styles/printer-info.css';
import './../../styles/table.css';
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import sendRequest from "../../helpers/request";
import { useState } from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Filter from "../../components/Filter";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import ButtonIcon from "../../components/ButtonIcon";

export default function PrinterInfo() {
    const headers = [
        { name: 'ID', class: 'id'},
        { name: 'Hãng', class: 'brand'},
        { name: 'Mẫu mã', class: 'model'},
        { name: 'Mô tả', class: 'description'},
        { name: 'Cơ sở', class: 'campus'},
        { name: 'Tòa', class: 'building'},
        { name: 'Phòng', class: 'room'},
        { name: 'Hành động', class: 'action'}
    ];

    const [printers, setPrinters] = useState([
        {id: 'CMG1', brand: 'Canon', model: 'MAXIFY GX5070', description: 'Máy in siêu tốc', campus: 2, building: 'H3', room: 504 },
        {id: 'CMG2', brand: 'Canon', model: 'MAXIFY GX5070', description: 'Máy in siêu tốc', campus: 2, building: 'H3', room: 504 },
        {id: 'CMG3', brand: 'Canon', model: 'MAXIFY GX5070', description: 'Máy in siêu tốc', campus: 2, building: 'H3', room: 504 },
        {id: 'CMG4', brand: 'Canon', model: 'MAXIFY GX5070', description: 'Máy in siêu tốc', campus: 2, building: 'H3', room: 504 },
        {id: 'CMG5', brand: 'Canon', model: 'MAXIFY GX5070', description: 'Máy in siêu tốc', campus: 2, building: 'H3', room: 504 }
    ]);

    // function addPrinter(newPrinter) {
    //     setPrinters([...printers, newPrinter]);
    // }

    // function editPrinter(editedPrinter) {
    //     const updatedPrinters = printers.map((printer) => {
    //         if (editedPrinter.id === printers.id) {
    //             return editedPrinter;
    //         }
    //         return printer;
    //     });
    //     setPrinters(updatedPrinters);
    // }

    function handleDelete(e) {
        const printerId = e.currentTarget.parentNode.parentNode.className;
        if (window.confirm('Are you sure you want to delete this item?')) {
            // sendRequest(
            //     'DELETE',
            //     '/admin/printer?id=' + printerId,
            //     ''
            // );
               
            // TODO: remove if success
            const remainingPrinters = printers.filter((printer) => (printerId !== printer.id));
            setPrinters(remainingPrinters);
        }
    }

    const tableRows = printers.map((printer) => {
        return (
            <tr className={printer.id} key={`row-${nanoid()}`}>
                <td>{printer.id}</td>
                <td>{printer.brand}</td>
                <td>{printer.model}</td>
                <td>{printer.description}</td>
                <td>{printer.campus}</td>
                <td>{printer.building}</td>
                <td>{printer.room}</td>
                <td className="action-button">
                    <ButtonIcon
                        link={'/admin/printer/details'}
                        state={{printer: printer}}
                        className="view"
                    >
                        <FontAwesomeIcon icon={faEye} color="#fff" />
                    </ButtonIcon>
                    <ButtonIcon
                        link={'/admin/printer/edit'}
                        state={{printer: printer}}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} color="#fff" />
                    </ButtonIcon>
                    <ButtonIcon
                        action={handleDelete}
                        className="delete"
                    >
                        <FontAwesomeIcon icon={faTrashCan} color="#fff" />
                    </ButtonIcon>
                    {/* <a href="#" onClick={handleDelete} className="delete"><FontAwesomeIcon icon={faTrashCan} color="#fff" /></a> */}
                </td>
            </tr>
        );
    });

    return (
        <AdminLayout>
            <article className="printer-info">
                <h1>Printer List here</h1>

                <div className="util">
                    <Filter />
                    <SearchBar />
                    <Button
                        link={'/admin/printer/add'}
                        className="add"
                    >   
                        <FontAwesomeIcon icon={faPlusCircle} />
                        <span>Thêm máy in</span>
                    </Button>
                </div>
    
                <table className="table">
                    <thead>
                        <tr>
                            { headers.map((header) =>
                                <th className={header.class} key={header.class}>{header.name}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>

            </article>
        </AdminLayout>
    );
}