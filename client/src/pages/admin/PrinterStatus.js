import { useEffect, useRef, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import PrinterStatusCard from "../../components/PrinterStatusCard";
import sendRequest, { sendGetRequest } from "../../helpers/request";
import SearchBar from "../../components/SearchBar";
import "../../styles/printer-status.css";
import dump from "../../helpers/dump";

export default function PrinterStatus() {

    const [printerList, setPrinterList] = useState([]);
    const allPrinters = useRef([]);

    useEffect(() => {
        sendGetRequest('/admin/printer', 'cannot get printer list')
            .then((data) => {
                const init = data.map((printer) => {
                    return {
                        id: printer.id,
                        name: printer.printerName,
                        brand: printer.firm,
                        description: printer.description,
                        roomId: printer.room.id,
                        room: printer.room.roomName,
                        building: printer.room.building.buildingName,
                        campus: printer.room.building.campus.campusName,
                        isActive: printer.status,
                        inkStat: printer.inkAmount,
                        pageStat: printer.pageAmount,
                        productivity: printer.efficiency
                        // printJobCount: printer.
                        // printArea: printer.squarePrinting            
                    }
                });
                setPrinterList(init);
                allPrinters.current = init;
            });
    }, []);

    function handleToggle(id) {
        const newPrinterList = printerList.map((printer) => {
            if (printer.id === id) {
                sendRequest(
                    'POST',
                    '/admin/printer?room-id=' + printer.roomId,
                    {
                        id: printer.id,
                        printerName: printer.name,
                        inkAmount: printer.inkStat,
                        pageAmount: printer.pageStat,
                        firm: printer.brand,
                        description: printer.description,
                        efficiency: printer.productivity,
                        status: !printer.isActive
                    }
                    ,
                    'cannot update printer'
                );
                return { ...printer, isActive: !printer.isActive }
            }
            return printer;
        });
        setPrinterList(newPrinterList);
    }

    function handleSearch(input) {
        const filtered = allPrinters.current.filter((printer) => {
            return (printer.room + printer.building).toLowerCase().includes(input);
        });
        setPrinterList(filtered);
    }

    return (
        <AdminLayout>
            <article className="printer-status">
                <div className="util">
                    <SearchBar handleSearch={handleSearch} />
                </div>
                <div className="grid">
                    {
                        printerList.map((printer) => 
                            <PrinterStatusCard 
                                id={printer.id}
                                active={printer.isActive}
                                title={printer.room + printer.building}
                                printJobCount={17}
                                printArea={200}
                                productivity={printer.productivity}
                                pageStat={printer.pageStat}
                                inkStat={printer.inkStat}
                                handleToggle={handleToggle}
                            />
                        )
                    }
                </div>    
            </article>
        </AdminLayout>
    );
}