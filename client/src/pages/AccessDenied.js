import { useLocation } from "react-router-dom";
import Button from "../components/Button";

export default function AccessDenied() {
    // TODO: GoBack button
    // const location = useLocation();
    // const fromPage = location.state?.from?.pathname || "/";

    return (
        <main className="access-denied">
            <h1>Access Denied!</h1>
            <p>You don't have permissions to access this resource. Please use another account.</p>
            <div className="control">
                {/* <Button text="Go Back" link={fromPage} replace={true} /> */}
                <Button link="/" replace={true}>
                    Home
                </Button>
            </div>
        </main>
    );
}