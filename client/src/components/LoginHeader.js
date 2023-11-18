import LogoHCMUT from "./LogoHCMUT";
import "./../styles/login.css"

export default function LoginHeader() {
    return (
        <header className="ssoLoginHeader">
            <LogoHCMUT />
            <h1>Central Authentication Service</h1>
        </header>
    );
}