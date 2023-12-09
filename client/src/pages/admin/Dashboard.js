import React, { useEffect, useState } from "react";
import "./../../styles/dashboard.css";
import AdminLayout from "../../components/AdminLayout";
import { sendGetRequest } from "../../helpers/request";
import { Chart, registerables } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { dumpObject } from "../../helpers/dump";

Chart.register(...registerables);
export default function Dashboard() {
    const colorPalette = [
        "#ffbe0b",
        "#fb5607",
        "#ff006e",
        "#8338ec",
        "#3a86ff"
    ];
    const bgColor = "rgba(54, 162, 235, 0.2)";
    const borderColor = "'rgba(54, 162, 235, 1)";

    const [start, setStart] = useState('2023-01');
    const [end, setEnd] = useState('2023-12');

    // pages by printer (PBP)
    const [pbpStat, setPbpStat] = useState([]);
    // printer requests by printer (PRP)
    const [prpStat, setPrpStat] = useState([]);
    // percentage of page sizes (POPS)
    const [popsStat, setPopsStat] = useState([]);
    // profit by month (PBM)
    const [pbmStat, setPbmStat] = useState([]);

    useEffect(() => {
        //get PBP
        sendGetRequest(
            '/admin/statistics/pages-by-printer?from=' + start + '&to=' + end,
            'cannot get PBP statistics'
        ).then((data) => {
            const initStat = data.map((elem) => {
                return {
                    printerName: elem.name,
                    pageCount: (elem.stat !== null) ? elem.stat : 0
                };
            });
            setPbpStat(initStat);
        });

        // get PRP
        sendGetRequest(
            '/admin/statistics/request-by-printer?from=' + start + '&to=' + end,
            'cannot get PRP statistics'
        ).then((data) => {
            const initStat = data.map((elem) => {
                return {
                    printerName: elem.name,
                    requestCount: elem.stat
                };
            })
            setPrpStat(initStat);
        });

        // get POPS
        sendGetRequest(
            '/admin/statistics/size-by-month?from=' + start + '&to=' + end,
            'cannot get POPS statistics'
        ).then((data) => {
            const initStat = data.map((elem) => {
                return {
                    pageSize: elem.name,
                    percentage: elem.stat
                };
            });
            setPopsStat(initStat);
        });

        // get PBM
        sendGetRequest(
            '/admin/statistics/profit-by-month?from=' + start + '&to=' + end,
            'cannot get PBM statistics'
        ).then((data) => {
            const initStat = data.map((elem) => {
                return {
                    month: elem.name,
                    profit: elem.stat
                };
            });
            setPbmStat(initStat);
        });
    }, [start, end]);

    dumpObject(prpStat, 'stattttt');

    return (
        <AdminLayout>
            <article className="dashboard">
                <h1>Dashboard</h1>
                <div className="control">
                    {/* <div className="field">
                        <label htmlFor="start">Chọn tháng bắt đầu</label>
                        <input type="text" name="start" id="start" 
                            value={start}
                            onChange={(e) => {
                                // const newMonth = moment(e.target.value).format('YYYY-MM');
                                setStart(e.target.value);
                            }}/>
                    </div>
                    <div className="field">
                        <label htmlFor="end">Chọn tháng kết thúc</label>
                        <input type="text" name="end" id="end" 
                            value={end}
                            onChange={(e) => {
                                setEnd(e.target.value);
                            }}/>
                    </div> */}
                </div>
                <div className="graph">
                    <Bar
                        data={{
                            labels: pbpStat.map((stat) => stat.printerName),
                            datasets: [{
                                label: '# of Pages',
                                data: pbpStat.map((stat) => stat.pageCount),
                                backgroundColor: bgColor,
                                borderColor: borderColor,
                                borderWidth: 1
                            }]
                        }}
                    />
                    <Bar 
                        data={{
                            labels: prpStat.map((stat) => stat.printerName),
                            datasets: [{
                                label: '# of Requests',
                                data: prpStat.map((stat) => stat.requestCount),
                                backgroundColor: bgColor,
                                borderColor: borderColor,
                                borderWidth: 1
                            }]
                        }}
                    />
                    <div className="chart3">
                        <Doughnut
                            data={{
                                labels: popsStat.map((stat) => stat.pageSize),
                                datasets: [
                                    {
                                        label: "Number of Pages",
                                        backgroundColor: colorPalette,
                                        data: popsStat.map((stat) => stat.percentage)
                                    }
                                ]
                            }}
                        />
                    </div>
                    <Bar 
                        data={{
                            labels: pbmStat.map((stat) => stat.month),
                            datasets: [{
                                label: 'Monthly Profit',
                                data: pbmStat.map((stat) => stat.profit),
                                backgroundColor: bgColor, 
                                borderColor: borderColor,
                                borderWidth: 1
                            }]
                        }}
                    />
                </div>
            </article>
        </AdminLayout>
    );
}