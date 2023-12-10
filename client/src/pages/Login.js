import LoginFooter from "../components/LoginFooter";
import LoginForm from "../components/LoginForm";
import LoginHeader from "../components/LoginHeader";

export default function LoginPage() {
    return (
        <div className="ssoLoginPage">
            <LoginHeader />
            <LoginForm />
            <LoginFooter />
        </div>
    );  
}