import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminLayout from "../../components/AdminLayout";
import Button from "../../components/Button";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./../../styles/table.css";
import "./../../styles/config-page-allocation.css";
import { useEffect, useState } from "react";
import { sendGetRequest } from "../../helpers/request";

export default function ConfigPageAllocation() {
    const headers = [
        { name: 'Học kì', value: 'semester'},
        { name: 'Năm học', value: 'academic-year'},
        { name: 'Ngày cấp phát', value: 'alloc-date'},
        { name: 'Số trang A4 cấp phát', value: 'page-num'},
        // { name: 'Trạng thái', value: 'status'}
    ];

    const [pageAllocs, setPageAllocs] = useState([]);

    useEffect(() => {
        sendGetRequest('/admin/page-allocation')
            .then((response) => {
                if (response.ok) {
                    const json = response.json();
                    json.then((data) => {
                        const initialPageAllocs = data.map((pgalloc) => {
                            return {
                                id: pgalloc.id,
                                semester: pgalloc.semester,
                                academicYear: pgalloc.year, // TODO
                                allocDate: pgalloc.allocatedDate, // TODO: conversion...
                                pageNum: pgalloc.numOfPage
                            };
                        });
                        setPageAllocs(initialPageAllocs);
                    });
                } else {
                    window.alert('Request failed: cannot get page allocation config list');
                }
            });
    }, []);

    const rows = pageAllocs.map((pgalloc) => {
        return (
            <tr className={pgalloc.id} key={pgalloc.id}>
                {/* <td>{pgalloc.id}</td> */}
                <td>{pgalloc.semester}</td>
                <td>{pgalloc.academicYear}</td>
                {/* TODO format date */}
                <td>{pgalloc.allocDate}</td>
                <td>{pgalloc.pageNum}</td>
                {/* <td>{pgalloc.status}</td> */}
            </tr>
        );
    });

    return (
        <AdminLayout>
            <article className="config-page-allocation">
                <div className="util">
                    <Button 
                        link={'/admin/config/pgalloc/add'}
                    >
                        <FontAwesomeIcon icon={faPlusCircle} />
                        <span>Thêm lịch</span>
                    </Button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            {
                                headers.map((header) => 
                                    <th className={header.value} key={header.value}>{header.name}</th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </article>
        </AdminLayout>
    );
}