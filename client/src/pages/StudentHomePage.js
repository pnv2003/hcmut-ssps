import Button from "../components/Button";
import Poster from "../components/Poster";
import Copyright from "../components/Copyright";
import StudentHeader from "../components/StudentHeader";
import Title from "../components/Title";
import "./../styles/student-homepage.css";
import PrinterComic from "./../assets/img/Printer-Comic.png";

export default function StudentHomePage(props) {

    // TODO
    const user = { name: "Son" };

    return (
        <div className="student-homepage">
            <StudentHeader />
            <main>
                <div className="student-homepage-left">
                    <Title smallText={"Welcome, " + user.name + "!"}/>
                    <Button 
                        text={"In tài liệu ngay"}  
                        // TODO
                        link={"#"}
                    />
                </div>
                <Poster src={PrinterComic} alt="Printer Comic Poster" />
            </main>
        </div>
    );
}