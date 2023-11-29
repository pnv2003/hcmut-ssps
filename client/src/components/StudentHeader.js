import LogoHCMUT from "./LogoHCMUT";
import LogoSSPS from "./LogoSSPS";
import NavBar from "./Navbar";
import ProfileIcon from "./ProfileIcon";
import "./../styles/student-header.css";

export default function StudentHeader(props) {

    const items = [
        { text: "Trang chủ", link: "/"}, 
        { text: "In tài liệu", link: "/file"},
        { text: "Mua trang in", link: "/buy"},
        { text: "Lịch sử in", link: "/log"}
    ];

    return (
        <header className="student-header">
            <LogoHCMUT />
            <LogoSSPS />
            <NavBar items={items} />
            <ProfileIcon />
        </header>
    );
}