import { useEffect, useRef, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import SearchBar from "../../components/SearchBar";
import "./../../styles/table.css";
import { sendGetRequest } from "../../helpers/request";
import Button from "../../components/Button";
import moment from "moment";

export default function PrintingLogAll() {

    const [printingLogs, setPrintingLogs] = useState([]);
    const allPrintingLogs = useRef([]);

    useEffect(() => {
        sendGetRequest('/admin/printing-logs', 'cannot get printing logs')
            .then((data) => {
                const initLogs = data.map((log) => {
                    return {
                        fileName: log.fileName,
                        fileSize: log.size,
                        fileConfig: {
                            pageNum: log.numOfPages,
                            numCopies: log.numCopies,
                            isLandscape: log.isHori,
                            isDoubleSided: log.isDoubleSided,
                            pageSize: log.pageSize
                        },
                        startTime: new Date(log.startDate).toUTCString(),
                        endTime: new Date(log.endDate).toUTCString(),
                        printArea: log.squarePrinting,
                        printer: {
                            room: log.printer.room.roomName,
                            building: log.printer.room.building.buildingName,
                            campus: log.printer.room.building.campus.campusName
                        },
                        student: {
                            studentId: log.student.mssv,
                            firstName: log.student.user.firstName,
                            lastName: log.student.user.lastName
                        }
                    };
                });
                setPrintingLogs(initLogs);
                allPrintingLogs.current = initLogs;
            });
    }, []);

    const headers = [
        { name: "MSSV", value: "student-id" },
        { name: "Tên SV", value: "student" },
        { name: "Máy in", value: "printer" },
        { name: "Thời gian bắt đầu", value: "start-time" },
        { name: "Thời gian hoàn thành", value: "end-time" },
        { name: "Tên file", value: "filename" },
        { name: "Số trang", value: "page-num" },
        { name: "Khổ giấy", value: "page-size" }
    ];

    function handleSearch(input) {
        const filteredLogs = allPrintingLogs.current.filter((log) => {
            return (
                log.student.studentId.toString().toLowerCase().includes(input) || 
                log.student.firstName.toLowerCase().includes(input) || 
                (log.printer.room + log.printer.building + ' - ' + log.printer.campus).toLowerCase().includes(input) ||
                moment(log.startTime).format('DD/MM/YYYY hh:mm:ss').toLowerCase().includes(input) ||
                moment(log.endTime).format('DD/MM/YYYY hh:mm:ss').toLowerCase().includes(input) ||
                log.fileName.toLowerCase().includes(input) ||
                log.fileConfig.pageNum.toString().toLowerCase().includes(input) ||
                log.fileConfig.pageSize.toLowerCase().includes(input)
            )
        });
        setPrintingLogs(filteredLogs);
    }

    return (
        <AdminLayout>
            <article className="printing-log">
                <div className="head">
                    <h1>Lịch sử in</h1>
                    <Button link="/admin/log/payment">
                        Lịch sử thanh toán {">"}
                    </Button>
                </div>
                <div className="util">
                    <SearchBar handleSearch={handleSearch} />
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            {headers.map((header) => 
                                <th className={header.value}>{header.name}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            printingLogs.map((log) => 
                                <tr>
                                    <td>{log.student.studentId}</td>
                                    <td>{log.student.firstName}</td>
                                    <td>{log.printer.room + log.printer.building + ' - ' + log.printer.campus}</td>
                                    <td>{moment(log.startTime).format('DD/MM/YYYY hh:mm:ss')}</td>
                                    <td>{moment(log.endTime).format('DD/MM/YYYY hh:mm:ss')}</td>
                                    <td>{log.fileName}</td>
                                    <td>{log.fileConfig.pageNum}</td>
                                    <td>{log.fileConfig.pageSize}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </article>
        </AdminLayout>
    );
}