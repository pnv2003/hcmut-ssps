import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import Button from "../../components/Button";
import sendRequest from "../../helpers/request";
import "./../../styles/config-page-allocation-add.css";
import { useNavigate } from "react-router";
import moment from "moment";
import { dumpObject } from "../../helpers/dump";

export default function ConfigPageAllocationAdd() {
    // let defaultDate = new Date();
    // defaultDate.setDate(defaultDate.getDate() + 3);
    
    const navigate = useNavigate();
    const [semester, setSemester] = useState('');
    const [academicYear, setAcademicYear] = useState(moment().year());
    const [allocDate, setAllocDate] = useState(moment().format('YYYY-MM-DD'));
    const [pageNum, setPageNum] = useState(0);

    function handleAdd() {       
        sendRequest(
            'POST',
            '/admin/page-allocation',
            {
                semester: semester,
                year: academicYear, 
                allocatedDate: allocDate,
                numOfPage: pageNum
            }
        ).then((data) => {
            navigate('/admin/config');
        });
    }

    return (
        <AdminLayout>
            <article className="config-page-allocation-add">
                <h3>Thêm lịch cấp phát</h3>
                <div className="field">
                    <label for="semester">Học kì</label>
                    <input type="number" name="semester" id="semester"
                        value={semester}
                        onChange={(e) => {
                            setSemester(e.target.value);
                        }}/>
                </div>
                <div className="field">
                    <label for="academic-year">Năm học {(academicYear - 0) + ' - ' + (academicYear - 0 + 1)}</label>
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
                            const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
                            setAllocDate(newDate);
                        }}
                    />
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