import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../components/Button";
import "./../../styles/print-request-sent.css";

export default function PaymentRequestSent() {
    return (
        <div className="print-request-sent">
            <FontAwesomeIcon icon={faCheckCircle} size="6x" color="#4BD396" />
            <h1>Mua trang in thành công</h1>
            <Button link="/">
                Trang chủ
            </Button>
        </div>
    );
}