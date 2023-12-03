import React from "react";
import './../styles/table.css';

export default function Table(props) {

    const data = {
        headers: [
            'H1', 'H2', 'H3', 'H4', 'H5'
        ],
        rows: [
            [1, 2, 3, 4, 5],
            ['A', 'B', 'C', 'D', 'E']
        ]
    };

    const tableHeaders = data.headers.map((header) => 
        <th>{header}</th>
    );

    const tableRows = data.rows.map((rowData) => {
        const row = rowData.map((cell) => 
            <td>{cell}</td>
        );

        return (
            <tr>
                {row}
            </tr>
        );
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    {tableHeaders}
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
}