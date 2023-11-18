import Logo from "../assets/img/hcmut.png"
import "./../styles/login.css"

export default function LoginHeader() {
    return (
        <header className="ssoLoginHeader">
            <div className="logo">
                <img src={Logo} alt="HCMUT Logo"/>
            </div>
            <h1>Central Authentication Service</h1>
        </header>
    );
}