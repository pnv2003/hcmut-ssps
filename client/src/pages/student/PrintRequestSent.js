import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PrintRequestSent() {
    return (
        <div className="print-request-sent">
            <FontAwesomeIcon icon={faCheckCircle} size="lg" color="green" />
            <h1>Yêu cầu in được gửi thành công</h1>
        </div>
    );
}