import Button from "./Button";
import LogoHCMUT from "./LogoHCMUT";
import LogoSSPS from "./LogoSSPS";
import "../styles/header.css";
import NavBar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const items = [
        { text: "Trang chủ", link: "#"}, 
        { text: "Về chúng tôi", link: "#about-us"},
        { text: "Dịch vụ", link: "#services"},
        { text: "Liên hệ", link: "#contact"}
    ];

    function handleLogoClick() {
        navigate('/');
    }

    return (
        <header className="header">
            <div className="logo" onClick={handleLogoClick}>
                <LogoHCMUT />
                <LogoSSPS />
            </div>
            <NavBar 
                items={items}
                static={true}
            >
                <Button link="/login">
                    Đăng nhập
                </Button>
            </NavBar>
            
        </header>
    );
}