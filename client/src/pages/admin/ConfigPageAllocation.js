import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminLayout from "../../components/AdminLayout";
import Button from "../../components/Button";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./../../styles/table.css";
import "./../../styles/config-page-allocation.css";
import { useEffect, useRef, useState } from "react";
import sendRequest, { sendGetRequest } from "../../helpers/request";
import moment from "moment";
import SearchBar from "../../components/SearchBar";
import ButtonIcon from "../../components/ButtonIcon";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function ConfigPageAllocation() {
    const headers = [
        { name: 'Học kì', value: 'semester'},
        { name: 'Năm học', value: 'academic-year'},
        { name: 'Ngày cấp phát', value: 'alloc-date'},
        { name: 'Số trang A4 cấp phát', value: 'page-num'},
        // { name: 'Trạng thái', value: 'status'}
    ];

    const [pageAllocs, setPageAllocs] = useState([]);
    const allPageAllocs = useRef([]);

    useEffect(() => {
        sendGetRequest('/admin/page-allocation')
            .then((data) => {
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
                allPageAllocs.current = initialPageAllocs;
            });
    }, []);

    const rows = pageAllocs.map((pgalloc) => {
        return (
            <tr className={pgalloc.id} key={pgalloc.id}>
                {/* <td>{pgalloc.id}</td> */}
                <td>{pgalloc.semester}</td>
                <td>{pgalloc.academicYear + '-' + (pgalloc.academicYear + 1)}</td>
                {/* TODO format date */}
                <td>{moment(pgalloc.allocDate).format('DD/MM/YYYY')}</td>
                <td>{pgalloc.pageNum}</td>
                {/* <td>{pgalloc.status}</td> */}
                <td>
                    <ButtonIcon
                        className="delete"
                        action={handleDelete}
                    >
                        <FontAwesomeIcon icon={faTrashCan} color="#fff" />
                    </ButtonIcon>
                </td>
            </tr>
        );
    });

    function handleDelete(e) {
        const pgallocId = e.currentTarget.parentNode.parentNode.className;
        if (window.confirm('Are you sure you want to delete this item?')) {
            sendRequest(
                'DELETE',
                '/admin/page-allocation?id=' + pgallocId,
                '',
                'cannot delete page allocation config'
            ).then((data) => {
                // if (data.accepted) {
                    const remaining = pageAllocs.filter((pgalloc) => (pgallocId != pgalloc.id));
                    setPageAllocs(remaining);
                // } else {
                //     window.alert('Cannot delete this one!');
                // }
            });
        }
    }

    function handleSearch(input) {
        const filteredPageAllocs = allPageAllocs.current.filter((pgalloc) => {
            return (
                pgalloc.semester.toString().toLowerCase().includes(input) ||
                pgalloc.academicYear.toString().toLowerCase().includes(input) ||
                moment(pgalloc.allocDate).format('DD/MM/YYYY').toLowerCase().includes(input) ||
                pgalloc.pageNum.toString().toLowerCase().includes(input)
            );
        });
        setPageAllocs(filteredPageAllocs);
    }

    return (
        <AdminLayout>
            <article className="config-page-allocation">
                <div className="util">
                    <SearchBar handleSearch={handleSearch} />
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