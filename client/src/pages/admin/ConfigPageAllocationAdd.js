import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import Button from "../../components/Button";
import sendRequest from "../../helpers/request";
import "./../../styles/config-page-allocation-add.css";
import { useNavigate } from "react-router";

export default function ConfigPageAllocationAdd() {
    let defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 3);
    
    const navigate = useNavigate();
    const [semester, setSemester] = useState('');
    const [academicYear, setAcademicYear] = useState('');
    const [allocDate, setAllocDate] = useState(defaultDate);
    const [pageNum, setPageNum] = useState(0);

    function handleAdd() {
        sendRequest(
            'POST',
            '/admin/page-allocation',
            {
                semester: semester,
                year: academicYear, // TODO...
                allocatedDate: allocDate, // TODO conversion
                numOfPage: pageNum
            }
        ).then((response) => {
            if (response.ok) {
                navigate('/admin/config');
            } else {
                window.alert('Request failed: cannot add page allocation config');
            }
        });
    }

    return (
        <AdminLayout>
            <article className="config-page-allocation-add">
                <h3>Thêm lịch cấp phát</h3>
                <div className="field">
                    <label for="semester">Học kì</label>
                    <input type="text" name="semester" id="semester"
                        value={semester}
                        onChange={(e) => {
                            setSemester(e.target.value);
                        }}/>
                </div>
                <div className="field">
                    <label for="academic-year">Năm học</label>
                    <input type="text" name="academic-year" id="academic-year" 
                        value={academicYear}
                        onChange={(e) => {
                            setAcademicYear(e.target.value);
                        }}/>
                </div>
                <div className="field">
                    <label for="allocdate">Ngày cấp phát</label>
                    <input type="date" name="allocdate" id="allocdate" 
                        value={allocDate}
                        onChange={(e) => {
                            setAllocDate(new Date(e.target.value));
                        }}/>
                </div>
                <div className="field">
                    <label for="pagenum">Số trang cấp phát</label>
                    <input type="number" name="pagenum" id="pagenum" 
                        value={pageNum}
                        onChange={(e) => {
                            setPageNum(e.target.value);
                        }}/>
                </div>
                <section className="foot">
                    <Button action={handleAdd}>
                        Thêm lịch
                    </Button>
                    <Button className="delete" link={"/admin/config"}>
                        Hủy bỏ
                    </Button>
                </section>
            </article>
        </AdminLayout>
    );
}