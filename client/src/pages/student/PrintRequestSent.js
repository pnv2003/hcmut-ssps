import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../../styles/print-request-sent.css";
import Button from "../../components/Button";

export default function PrintRequestSent() {
    return (
        <div className="print-request-sent">
            <FontAwesomeIcon icon={faCheckCircle} size="6x" color="#4BD396" />
            <h1>Yêu cầu in được gửi thành công</h1>
            <Button link="/">
                Trang chủ
            </Button>
        </div>
    );
}