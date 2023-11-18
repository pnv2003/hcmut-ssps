import LogoHCMUT from "./LogoHCMUT";
import LogoSSPS from "./LogoSSPS";
import Navbar from "./Navbar";
import StudentProfileIcon from "./StudentProfileIcon";
import "./../styles/student-header.css";

export default function StudentHeader() {

    const items = [
        { text: "Trang chủ"}, 
        { text: "In tài liệu"},
        { text: "Mua trang in"},
        { text: "Lịch sử in"}
    ];

    return (
        <header className="student-header">
            <LogoHCMUT />
            <LogoSSPS />
            <Navbar items={items} />
            <StudentProfileIcon />
        </header>
    );
}