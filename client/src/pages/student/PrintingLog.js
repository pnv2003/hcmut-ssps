import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import SearchBar from "../../components/SearchBar";
import StudentHeader from "../../components/StudentHeader";
import Table from "../../components/Table";
import { sendGetRequest } from "../../helpers/request";
import { useAuth } from "../../contexts/AuthContext";

export default function PrintingLog() {
    const { getUser } = useAuth();
    const [printingLog, setPrintingLog] = useState(null);

    useEffect(() => {
        sendGetRequest('/student/' + getUser().id + '/printing-logs', 'cannot get printing logs')
            .then((data) => {
                const initLog = data.printingLog.map((log) => {
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
                        startTime: log.startDate,
                        endTime: log.endDate,
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
                setPrintingLog(initLog);
            });
    }, []);

    return (
        <div className="printing-log">
            <StudentHeader />
            <main>
                <div className="util">
                    <SearchBar />    
                </div>
                <Table />
            </main>
        </div>
    );
}