import { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import FileTypeAdd from "../../components/FileTypeAdd";
import FileTypeList from "../../components/FileTypeList";
import './../../styles/config-file.css';
import FileSizeMax from "../../components/FileSizeMax";
import PageUnitPrice from "../../components/PageUnitPrice";

export default function ConfigFile() {
    // TODO get current config
    const [fileTypes, setFileTypes] = useState([]);

    function addFileType(newFileType) {
        // TODO add if request OK
        setFileTypes([...fileTypes, newFileType]);
    }

    function removeFileType(id) {
        // TODO remove if request OK
        const remainingFileTypes = fileTypes.filter((ftype) => (id !== ftype.id));
        setFileTypes(remainingFileTypes);
    }

    return (
        <AdminLayout>
            <article className="config-file">
                <FileTypeList fileTypes={fileTypes} removeFileType={removeFileType} />
                <div className="config">
                    <FileTypeAdd addFileType={addFileType} />
                    <FileSizeMax />
                    <PageUnitPrice />
                </div>
            </article>
        </AdminLayout>
    );
}