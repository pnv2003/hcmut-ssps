import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import FileTypeAdd from "../../components/FileTypeAdd";
import FileTypeList from "../../components/FileTypeList";
import './../../styles/config-file.css';
import FileSizeMax from "../../components/FileSizeMax";
import PageUnitPrice from "../../components/PageUnitPrice";
import sendRequest, { sendGetRequest } from "../../helpers/request";

export default function ConfigFile() {
    // TODO get current config
    const [fileTypes, setFileTypes] = useState([]);

    useEffect(() => {
        sendGetRequest('/admin/config', 'cannot get config list')
            .then((data) => {
                const initialFileTypes = data.fileTypeList.map((type) => {
                    return {
                        id: type.id,
                        extension: type.fileTypeName
                    }
                });
                setFileTypes(initialFileTypes);
            });
    }, [])

    function addFileType(newFileType) {
        // TODO add if request OK
        sendRequest(
            'POST',
            '/admin/file-type',
            {
                fileTypeName: newFileType.extension
            },
            'cannot add file type'
        ).then((data) => {
            const addedFileType = {
                id: data.id,
                extension: data.fileTypeName
            };
            setFileTypes([...fileTypes, addedFileType]);
        });  
    }

    function removeFileType(id) {
        // TODO remove if request OK
        sendRequest(
            'DELETE',
            '/admin/file-type?id=' + id,
            '',
            'cannot delete file type'
        ).then((data) => {

            // assume delete success
            const remainingFileTypes = fileTypes.filter((ftype) => (id !== ftype.id));
            setFileTypes(remainingFileTypes);
        });
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