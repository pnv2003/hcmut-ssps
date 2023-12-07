import { nanoid } from "nanoid";
import "./../styles/file-print-properties.css";
import { useState } from "react";
import getOptions from "../helpers/option";
import Button from "./Button";

export default function FilePrintProperties(props) {
    const pageSizes = [
        { name: 'A3', width: 11.69, height: 16.54 },
        { name: 'A4', width: 8.27, height: 11.69 },
        { name: 'A5', width: 5.83, height: 8.27 }
    ];

    const sidedList = [
        { name: 'In một mặt', value: 1 },
        { name: 'In hai mặt', value: 2 }
    ]

    const pageOrientations = [
        { name: 'Trang nằm dọc', value: 'Portrait' },
        { name: 'Trang nằm ngang', value: 'Landscape' }
    ]

    // const pageSizeOptions = pageSizes.map((size) => 
    //     <option key={`size-${nanoid()}`} value={size.name}>{size.name} ({size.width}'' x {size.height}'')</option>
    // );

    const [numCopies, setNumCopies] = useState(props.currentFile?.config.numCopies || 0);
    const [pageSize, setPageSize] = useState(props.currentFile?.config.pageSize || pageSizes[0].name);
    const [sided, setSided] = useState(props.currentFile?.config.sided || sidedList[0].value);
    const [pageOrientation, setPageOrientation] = useState(props.currentFile?.config.orientation || pageOrientations[0].value);
    const [pageNum, setPageNum] = useState(props.currentFile?.config.pageNum || 0);

    function handleApply() {
        props.editFileConfig(props.currentFileId, {
            numOfCopies: numCopies,
            pageSize: pageSize,
            orientation: pageOrientation,
            sided: sided,
            pageNum: pageNum
        });
    }

    function handleApplyAll() {
        props.editFileConfig(null, {
            numOfCopies: numCopies,
            pageSize: pageSize,
            orientation: pageOrientation,
            sided: sided,
            pageNum: pageNum
        });
    }

    return (
        <div className="file-print-properties">
            <h3>Cấu hình file: {props.currentFile?.name || ''}</h3>
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
                <select name="page-size" id="page-size"
                    value={pageSize} 
                    onChange={(e) => {
                        setPageSize(e.target.value);
                    }}>
                    {
                        getOptions(
                            pageSizes.map((size) => {
                                return {
                                    name: size.name + " (" + size.width + "'' x " +  size.height + "'')",
                                    value: size.name
                                };
                            })
                        )
                    }
                </select>
            </div>
            <div className="field">
                <label htmlFor="sided">In một mặt/hai mặt</label>
                <select name="sided" id="sided"
                    value={sided}
                    onChange={(e) => {
                        setSided(e.target.value);
                    }}>
                    {getOptions(sidedList)}
                </select>
            </div> 
            <div className="field">
                <label htmlFor="orientation">Hướng trang</label>
                <select name="orientation" id="orientation"
                    value={pageOrientation}
                    onChange={(e) => {
                        setPageOrientation(e.target.value);
                    }}>
                   {getOptions(pageOrientations)}
                </select>
            </div>
            <div className="field">
                <label htmlFor="pagenum">Chọn số trang</label>
                <input type="number" name="pagenum" id="pagenum" 
                    value={pageNum}
                    onChange={(e) => {
                        setPageNum(e.target.value);
                    }}/>
            </div>
            <div className="foot">
                <Button action={handleApply}>
                    Lưu
                </Button>
                <Button action={handleApplyAll}>
                    Áp dụng cho tất cả
                </Button>
            </div>
            
        </div>
    );
}