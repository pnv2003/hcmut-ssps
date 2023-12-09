import { useEffect, useRef, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import { sendGetRequest } from "../../helpers/request";
import moment from "moment";

export default function PaymentLog() {

    const [paymentLogs, setPaymentLogs] = useState([]);
    const allPaymentLogs = useRef([]);

    useEffect(() => {
        sendGetRequest('/admin/payment-logs', 'cannot get payment logs')
            .then((data) => {
                const initLogs = data.map((log) => {
                    return {
                        student: {
                            id: log.student.mssv,
                            firstName: log.student.user.firstName,
                            lastName: log.student.user.lastName
                        },
                        pageNum: log.numOfPages,
                        time: log.payDate,
                        unitPrice: log.unitPrice,
                        paymentMethod: log.paymentMethod
                    };
                });
                setPaymentLogs(initLogs);
                allPaymentLogs.current = initLogs;
            });
    }, []);

    const headers = [
        { name: "MSSV", value: "student-id" },
        { name: "Tên SV", value: "student" },
        { name: "Thời gian giao dịch", value: "time" },
        { name: "Phương thức thanh toán", value: "payment-method" },
        { name: "Số trang A4", value: "page-num" },
        { name: "Đơn giá", value: "unit-price" },
        { name: "Thành tiền", value: "total-price" }
    ];

    function handleSearch(input) {
        const filtered = allPaymentLogs.current.filter((log) => {
            return (
                log.student.id.toString().toLowerCase().includes(input) ||
                log.student.firstName.toLowerCase().includes(input) ||
                moment(log.time).format('DD/MM/YYYY hh:mm:ss').toLowerCase().includes(input) ||
                log.paymentMethod.toLowerCase().includes(input) ||
                log.pageNum.toString().toLowerCase().includes(input) ||
                log.unitPrice.toString().toLowerCase().includes(input) ||
                (log.pageNum * log.unitPrice).toString().toLowerCase().includes(input)
            );
        });
        setPaymentLogs(filtered);
    }

    return (
        <AdminLayout>
            <article className="printing-log">
                <div className="head">
                    <Button link="/admin/log/print">
                        {"<"} Lịch sử in
                    </Button>
                    <h1>Lịch sử thanh toán</h1>
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
                            paymentLogs.map((log) => 
                                <tr>
                                    <td>{log.student.id}</td>
                                    <td>{log.student.firstName}</td>
                                    <td>{moment(log.time).format('DD/MM/YYYY hh:mm:ss')}</td>
                                    <td>{log.paymentMethod}</td>
                                    <td>{log.pageNum}</td>
                                    <td>{log.unitPrice}</td>
                                    <td>{log.pageNum * log.unitPrice}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </article>
        </AdminLayout>
    );
}