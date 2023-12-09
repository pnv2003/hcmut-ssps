import React, { useEffect, useState } from "react";
import "./../../styles/dashboard.css";
import AdminLayout from "../../components/AdminLayout";
import { sendGetRequest } from "../../helpers/request";
import getOptions from "../../helpers/option";
import moment from "moment";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { dumpObject } from "../../helpers/dump";

Chart.register(...registerables);
export default function Dashboard() {

    const [start, setStart] = useState('2023-01');
    const [end, setEnd] = useState('2023-12');

    // pages by printer (PBP)
    const [pbpStat, setPbpStat] = useState([]);
    // percentage of printers'request (POPR)
    const [poprStat, setPoprStat] = useState([]);
    // percentage of each page size (POPS)
    const [popsStat, setPopsStat] = useState([]);
    // profit by month (PBM)
    const [pbmStat, setPbmStat] = useState([]);

    useEffect(() => {
        //get PBP
        sendGetRequest(
            '/admin/statistics/pages-by-printer?from=' + start + '&to=' + end,
            'cannot get PBP statistics'
        ).then((data) => {

            dumpObject(data, 'daaaaaaaaaaa');
            const initStat = data.map((elem) => {
                return {
                    printerName: elem.name,
                    pageNum: (elem.stat !== null) ? elem.stat : 0
                }   
            });
            setPbpStat(initStat);
        });

        // get POPR
        // sendGetRequest(
        //     '/admin/statistics/request-by-printer?from=' + start + '&to=' + end,
        //     'cannot get POPR statistics'
        // ).then((data) => {
        //     const initStat = data.map((elem) => {
        //         return {

        //         }
        //     })
        // })

        // // get POPS
        // sendGetRequest(
        //     '/admin/statistics/size-by-month?from=' + start + '&to=' + end,
        //     'cannot get POPS statistics'
        // ).then((data) => {
        //     const initStat = data.map((elem) => {
        //         return {
                    
        //         }
        //     });
        // })

        // // get PBM
        // sendGetRequest(
        //     '/admin/statistics/profit-by-month?from=' + start + '&to=' + end,
        //     'cannot get PBM statistics'
        // ).then((data) => {
        //     const initStat = data.map((elem) => {
        //         return {

        //         }
        //     });
        // })

        
    }, [start, end]);

    dumpObject(pbpStat, 'stattttt');

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
                            labels: pbpStat.map((stat) => { return stat.printerName; }),
                            datasets: [{
                                label: '# of Pages',
                                data: pbpStat.map((stat) => { return stat.pageNum; }),
                                backgroundColor: pbpStat.map((stat) => { return 'rgba(255, 99, 132, 0.2)'; })
                            }]
                        }}
                    />
                </div>
            </article>
        </AdminLayout>
    );
}