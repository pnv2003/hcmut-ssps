import React from "react"
import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import "./../styles/printer-status-card.css";

export default function PrinterStatusCard(props) {

    function handleToggle() {
        props.handleToggle(props.id);
    }

    return (
        <div className="printer-status-card">
            <div className={"head " + (props.active ? "success" : "grey") }>
                <h1>{props.title}</h1>
                <span>{props.active ? (<FontAwesomeIcon icon={faCircleCheck} />) : (<FontAwesomeIcon icon={faCircleXmark} />) }</span>
            </div>
            <div className="body">
                <p className="status">Trạng thái: <span className={"status-text " + (props.active ? "success" : "grey")}>{props.active ? ("Sẵn sàng") : ("Ngừng hoạt động")}</span></p>
                <div className="stat">
                    <div>
                        <p>Lượt in</p>
                        <p className="figure">{props.printJobCount}</p>
                    </div>
                    <div>
                        <p>Diện tích in</p>
                        <p className="figure">{props.printArea}</p>
                    </div>
                    <div>
                        <p>Hiệu suất</p>
                        <p className="figure">{props.productivity}%</p>
                    </div>
                </div>
                <div className="meters">
                    <div>
                        <span>Giấy</span>
                        <meter min="0" max="10000" low="3300" high="6600" optimum="8000" value={props.pageStat}>at {props.pageStat}/100</meter>
                    </div>
                    <div>
                        <span>Mực</span>
                        <meter min="0" max="100" low="33" high="66" optimum="80" value={props.inkStat}>at {props.inkStat}/100</meter>
                    </div>
                </div>
                <Button 
                    className={ props.active ? "delete" : "success" }
                    action={handleToggle}
                >
                    { props.active ? "Tắt" : "Bật" }
                </Button>
            </div>
        </div>
    )
}