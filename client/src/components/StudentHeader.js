import LogoHCMUT from "./LogoHCMUT";
import LogoSSPS from "./LogoSSPS";
import NavBar from "./Navbar";
import ProfileIcon from "./ProfileIcon";
import "./../styles/student-header.css";

export default function StudentHeader() {

    const items = [
        { text: "Trang chủ", link: "/", auth: true}, 
        { text: "In tài liệu", link: "/file", auth: true},
        { text: "Mua trang in", link: "/buy", auth: true},
        { text: "Lịch sử in", link: "/log", auth: true}
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