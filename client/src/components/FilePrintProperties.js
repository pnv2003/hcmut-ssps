import { nanoid } from "nanoid";
import "./../styles/file-print-properties.css";
import { useState } from "react";
import getOptions from "../helpers/option";
import Button from "./Button";
import dump, { dumpObject } from "../helpers/dump";

export default function FilePrintProperties(props) {
    const pageSizes = [
        { name: 'A1', width: 23.39, height: 33.11 },
        { name: 'A2', width: 16.54, height: 23.39 },
        { name: 'A3', width: 11.69, height: 16.54 },
        { name: 'A4', width: 8.27, height: 11.69 },
        { name: 'A5', width: 5.83, height: 8.27 }
    ];

    const sidedList = [
        { name: 'In một mặt', value: false },
        { name: 'In hai mặt', value: true }
    ];

    const isLandscapeOptions = [
        { name: 'Trang nằm dọc', value: false },
        { name: 'Trang nằm ngang', value: true }
    ];

    const [numCopies, setNumCopies] = useState(props.currentFile?.config.numCopies || 0);
    const [pageSize, setPageSize] = useState(props.currentFile?.config.pageSize || pageSizes[3].name);
    const [isDoubleSided, setIsDoubleSided] = useState(props.currentFile?.config.isDoubleSided || sidedList[0].value);
    const [isLandscape, setIsLandscape] = useState(props.currentFile?.config.isLandscape || false);
    const [pageNum, setPageNum] = useState(props.currentFile?.config.pageNum || 0);

    function handleApply() {
        props.editFileConfig(props.currentFile.id, {
            numCopies: numCopies,
            pageSize: pageSize,
            isLandscape: isLandscape === "true",
            isDoubleSided: isDoubleSided === "true",
            pageNum: pageNum - 0
        });
    }

    function handleApplyAll() {
        props.editFileConfig(null, {
            numCopies: numCopies,
            pageSize: pageSize,
            isLandscape: isLandscape === "true",
            isDoubleSided: isDoubleSided === "true",
            pageNum: pageNum - 0
        });
    }

    return (
        <>
        <h3 className="file-to-config">Cấu hình file: {props.currentFile?.name || ''}</h3>
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
                    value={isDoubleSided}
                    onChange={(e) => {
                        setIsDoubleSided(e.target.value);
                    }}>
                    {getOptions(sidedList)}
                </select>
            </div> 
            <div className="field">
                <label htmlFor="orientation">Hướng trang</label>
                <select name="orientation" id="orientation"
                    value={isLandscape}
                    onChange={(e) => {
                        setIsLandscape(e.target.value);
                    }}>
                   {getOptions(isLandscapeOptions)}
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
        </>
    );
}