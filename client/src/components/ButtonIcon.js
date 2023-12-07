import { Link } from "react-router-dom";
import "./../styles/button-icon.css";

export default function ButtonIcon(props) {

    function handleClick() {
        // default click behavior
    }

    return (
        <Link
            to={props.link || "javascript:void(0)"}
            state={props.state || undefined}
            replace={props.replace || false}
            className={"button-icon " + props.className}
            onClick={props.action || handleClick}
        >
            {props.children}
        </Link>
    );
}