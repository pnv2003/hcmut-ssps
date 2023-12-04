import Button from "../../components/Button";
import Poster from "../../components/Poster";
import StudentHeader from "../../components/StudentHeader";
import Title from "../../components/Title";
import "./../../styles/student-homepage.css";
import PrinterComic from "./../../assets/img/Printer-Comic.png";
import { useAuth } from "../../contexts/AuthContext";

export default function StudentHome() {
    const { getUser } = useAuth();
    const user = getUser();

    return (
        <div className="student-homepage">
            <StudentHeader />
            <main>
                <div className="student-homepage-left">
                    <Title smallText={"Welcome, " + user.firstName + "!"}/>
                    <Button 
                        link="/student/print"
                    >
                        In tài liệu ngay
                    </Button>
                </div>
                <Poster src={PrinterComic} alt="Printer Comic Poster" />
            </main>
        </div>
    );
}