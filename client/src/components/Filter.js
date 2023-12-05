import React, { useState } from "react";
import getOptions from "../helpers/option";

export default function Filter(props) {
    const [column, setColumn] = useState(props.columns[0]);

    return (
        <div className="filter">
            <select name="filter" id="filter"
                value={column}
                onChange={(e) => {
                    setColumn(e.target.value);
                    props.handleFilter(e.target.value);
                }}>
                {getOptions(props.columns)}
            </select>
        </div>
    );
}