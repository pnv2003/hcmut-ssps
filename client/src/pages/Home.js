import Header from "../components/Header";
import Button from "../components/Button";
import Title from "../components/Title";
import Poster from "../components/Poster";
import OfficePrinter from "../assets/img/office-printer.jpg";
import PrinterFairyTales from "../assets/img/printer-fairy-tales.png";
import "../styles/homepage.css";
import IconCard from "../components/IconCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faListCheck, faPrint } from "@fortawesome/free-solid-svg-icons";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
export default function HomePage() {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();
    
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    const loggedIn = useRef(false);
    
    useEffect(() => {
        console.log("Check session effect at 127.0.0.1!");
        if (currentUser) {
            console.log("Update auth!!!");
            setAuth({user: currentUser});
            loggedIn.current = true;
        }
    }, []);

    useEffect(() => {
        console.log("User logged in?");
        if (Object.hasOwn(auth, 'user') && auth.user !== null) {
            if (auth.user.isAdmin) {
                console.log(typeof auth.user);
                console.log("Assminnnn");
                navigate(
                    '/admin',
                    { replace: true } 
                )
            } else {
                console.log(typeof auth.user);
                console.log("Studentttt");
                navigate(
                    '/student',
                    { replace: true }
                )
            }
            return;
        }
    });
    
    return (
        <div className="homepage">
            <Header />
            <main>
                <article className="homepage-main" id="home">
                    <div className="homepage-main-left">
                        <Title smallText={"Những bản in chất lượng khai phá nên những ý tưởng thiên tài"}/>
                        <Button 
                            link="#"
                        >
                            Khám phá ngay
                        </Button>
                    </div>
                    <Poster src={OfficePrinter} alt="Office Printer Poster" />
                </article>   
                <article className="about-us" id="about-us">
                    <section className="intro">
                        <h2>Giới thiệu</h2>
                        <p>
                            Student Smart Printing Service là một dự án được thực hiện dưới sự quản lý của Trường Đại học Bách Khoa - Đại học Quốc gia TP.HCM
                        </p>
                    </section>
                    <section className="foundation">
                        <h2>Thành lập</h2>
                        <p>
                            Tiền thân của Student Smart Printing Service là bài tập lớn môn Công nghệ phần mềm của nhóm 8 lớp L03 HK 231. Đến năm 2024, dự án được ra đời nhằm mục đích hỗ trợ sinh viên của trường trong việc in ấn. Hiện nay, dịch vụ in ấn đã và đang liên tục phát triển nhờ giao diện thân thiện, mạng lưới máy in rộng khắp trường cùng đội ngũ vận hành chuyên nghiệp. 
                        </p>
                    </section>
                </article>        
                <article className="services" id="services">
                    <h2>Dịch vụ</h2>
                    <div className="cards">
                        <IconCard 
                            icon={<FontAwesomeIcon icon={faFaceSmile} color="#0D99FF"/>}
                            title="Tư vấn nhiệt tình"
                            description="Bạn sẽ được tư vấn, hướng dẫn nhiệt tình bởi chúng tôi"
                        />
                        <IconCard 
                            icon={<FontAwesomeIcon icon={faPrint} color="#0D99FF"/>}
                            title="In tài liệu"
                            description="Cung cấp dịch vụ in ấn tài liệu với đa dạng các kiểu tài liệu phổ biến"
                        />
                        <IconCard 
                            icon={<FontAwesomeIcon icon={faListCheck} color="#0D99FF"/>}
                            title="Nhiều tùy chọn"
                            description="Cung cấp nhiều tùy chọn in ấn cho từng tập tin"
                        />
                    </div>
                </article> 
                <article className="contact" id="contact">
                    <Poster src={PrinterFairyTales} alt="Printer Fairy Tales Poster" />
                    <ContactInfo />
                </article>
            </main>
            <Footer />
            <Copyright />
        </div>
    );
}