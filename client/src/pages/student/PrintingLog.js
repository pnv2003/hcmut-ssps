import Filter from "../../components/Filter";
import SearchBar from "../../components/SearchBar";
import StudentHeader from "../../components/StudentHeader";
import Table from "../../components/Table";

export default function PrintingLog() {
    return (
        <div className="printing-log">
            <StudentHeader />
            <main>
                <div className="util">
                    <Filter />
                    <SearchBar />    
                </div>
                <Table />
            </main>
        </div>
    );
}