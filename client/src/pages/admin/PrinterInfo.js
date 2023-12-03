import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminLayout from "../../components/AdminLayout";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import './../../styles/printer-info.css';
import './../../styles/table.css';
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

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

    const printerData = [
        {id: 'CMG', brand: 'Canon', model: 'MAXIFY GX5070', description: 'Máy in siêu tốc', campus: 2, building: 'H3', room: 504 },
        {id: 'CMG', brand: 'Canon', model: 'MAXIFY GX5070', description: 'Máy in siêu tốc', campus: 2, building: 'H3', room: 504 },
        {id: 'CMG', brand: 'Canon', model: 'MAXIFY GX5070', description: 'Máy in siêu tốc', campus: 2, building: 'H3', room: 504 },
        {id: 'CMG', brand: 'Canon', model: 'MAXIFY GX5070', description: 'Máy in siêu tốc', campus: 2, building: 'H3', room: 504 },
        {id: 'CMG', brand: 'Canon', model: 'MAXIFY GX5070', description: 'Máy in siêu tốc', campus: 2, building: 'H3', room: 504 }
    ];

    // function handleView(e) {
    //     const printerId = e.currentTarget.parentNode.parentNode.className;
        
    //     navigate(
    //         `/admin/printer/details/`,
    //         {
    //             state: {id: printerId}
    //         }
    //     );
    // }

    // function handleEdit(e) {
    //     const printerId = e.currentTarget.parentNode.parentNode.className;

    //     navigate(
    //         `/admin/printer/edit/${printerId}`,
    //         {
    //             state: {id: printerId}
    //         }
    //     );
    // }

    function handleDelete(e) {

    }

    const tableHeaders = headers.map((header) =>
        <th className={header.class} key={header.class}>{header.name}</th>
    );
    const tableRows = printerData.map((printer) => {
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
                    <Link
                        to={'/admin/printer/details'}
                        state={{printer: printer}}
                        className="view">
                        <FontAwesomeIcon icon={faEye} color="#fff" />
                    </Link>
                    <Link 
                        to={'/admin/printer/edit'}
                        state={{printer: printer}}
                        className="edit">
                        <FontAwesomeIcon icon={faPenToSquare} color="#fff" />
                    </Link>
                    <a href="#" onClick={handleDelete} className="delete"><FontAwesomeIcon icon={faTrashCan} color="#fff" /></a>
                </td>
            </tr>
        );
    });

    return (
        <AdminLayout>
            <article className="printer-info">
                <h1>Printer List here</h1>

                <table className="table">
                    <thead>
                        <tr>
                            {tableHeaders}
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