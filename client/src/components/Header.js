import Button from "./Button";
import LogoHCMUT from "./LogoHCMUT";
import LogoSSPS from "./LogoSSPS";
import "../styles/header.css";
import NavBar from "./Navbar";
import StaticNavBar from "./StaticNavBar";

export default function Header() {

    const items = [
        { text: "Trang chủ", link: "#"}, 
        { text: "Về chúng tôi", link: "#about-us"},
        { text: "Dịch vụ", link: "#services"},
        { text: "Liên hệ", link: "#contact"}
    ];

    return (
        <header className="header">
            <LogoHCMUT />
            <LogoSSPS />
            <NavBar items={items} static={true} />
            <Button text="Đăng nhập" link="/login" />
        </header>
    );
}