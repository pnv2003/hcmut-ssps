import React from "react";
import "./../styles/button.css";

export default function Button(props) {
    // const navigate = useNavigate();

    function handleClick() {
        // navigate(props.link);
    }

    return (
        <button onClick={handleClick}>
            {props.text}
        </button>
    );
}