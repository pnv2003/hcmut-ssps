import { nanoid } from "nanoid";
import "./../styles/file-print-properties.css";
import { useState } from "react";

export default function FilePrintProperties(props) {
    const pageSizes = [
        // { name: 'letter', width: 8.5, height: 11 },
        // { name: 'tabloid', width: 11, height: 17 },
        // { name: 'legal', width: 8.5, height: 14 },
        // { name: 'statement', width: 5.5, height: 8.5 },
        // { name: 'executive', width: 7.25, height: 10.5 },
        { name: 'A3', width: 11.69, height: 16.54 },
        { name: 'A4', width: 8.27, height: 11.69 },
        { name: 'A5', width: 5.83, height: 8.27 }
    ];

    const pageSizeOptions = pageSizes.map((size) => 
        <option key={`size-${nanoid()}`} value={size.name}>{size.name} ({size.width}'' x {size.height}'')</option>
    );

    const [numCopies, setNumCopies] = useState(0);

    return (
        <div className="file-print-properties">
            <div className="field">
                <label htmlFor="num-copies">Số bản</label>
                <input 
                    type="number" 
                    name="num-copies" 
                    id="num-copies" 
                    value={numCopies} 
                    onChange={(e) => {
                        setNumCopies(e.target.value);
                    }}
                />
            </div>
            <div>
                <label htmlFor="page-size">Khổ giấy</label>
                <select name="page-size" id="page-size">
                    {pageSizeOptions}
                </select>
            </div>
            <div className="field">
                <label htmlFor="sided">In một mặt/hai mặt</label>
                <select name="sided" id="sided">
                    <option value="1">In một mặt</option>
                    <option value="2">In hai mặt</option>
                </select>
            </div> 
            <div className="field">
                <label htmlFor="orientation">Hướng trang</label>
                <select name="orientation" id="orientation">
                    <option value="portrait">Trang nằm dọc</option>
                    <option value="landscape">Trang nằm ngang</option>
                </select>
            </div>
        </div>
    );
}