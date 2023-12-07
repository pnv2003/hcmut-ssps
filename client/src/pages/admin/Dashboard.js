import React, { useEffect, useState } from "react";
import "./../../styles/dashboard.css";
import AdminLayout from "../../components/AdminLayout";
import { sendGetRequest } from "../../helpers/request";

export default function Dashboard() {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);

    // pages by printer (PBP)
    const [pbpStat, setPbpStat] = useState([]);
    // percentage of printers'request (POPR)
    const [poprStat, setPoprStat] = useState([]);
    // percentage of each page size (POPS)
    const [popsStat, setPopsStat] = useState([]);
    // profit by month (PBM)
    const [pbmStat, setPbmStat] = useState([]);

    // useEffect(() => {
    //     // get PBP
    //     sendGetRequest(
    //         '/admin/statistics/pages-by-printer?from=' + start + '&to=' + end,
    //         'cannot get PBP statistics'
    //     ).then((data) => {
    //         const initStat = data.map((elem) => {
    //             return {


    //             }   
    //         });
    //     });

    //     // get POPR
    //     sendGetRequest(
    //         '/admin/statistics/request-by-printer?from=' + start + '&to=' + end,
    //         'cannot get POPR statistics'
    //     ).then((data) => {
    //         const initStat = data.map((elem) => {
    //             return {

    //             }
    //         })
    //     })

    //     // get POPS
    //     sendGetRequest(
    //         '/admin/statistics/size-by-month?from=' + start + '&to=' + end,
    //         'cannot get POPS statistics'
    //     ).then((data) => {
    //         const initStat = data.map((elem) => {
    //             return {
                    
    //             }
    //         });
    //     })

    //     // get PBM
    //     sendGetRequest(
    //         '/admin/statistics/profit-by-month?from=' + start + '&to=' + end,
    //         'cannot get PBM statistics'
    //     ).then((data) => {
    //         const initStat = data.map((elem) => {
    //             return {

    //             }
    //         });
    //     })

        
    // }, [start, end]);

    return (
        <AdminLayout>
            <article className="dashboard">
                <h1>Dashboard</h1>
                <div className="control">
                    <div className="field">
                        <label htmlFor="start">Chọn tháng bắt đầu</label>
                        <select name="start" id="start">
                            {}
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="end">Chọn tháng kết thúc</label>
                        <select name="end" id="end">
                            {}
                        </select>
                    </div>
                </div>
            </article>
        </AdminLayout>
    );
}