import { useLocation } from "react-router-dom";
import StudentHomePage from "./StudentHomePage";
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

export default function HomePage() {
    const location = useLocation();

    if (location.state !== null && location.state.auth) {
        return <StudentHomePage />
    }

    return (
        <div className="homepage">
            <Header />
            <main>
                <article className="homepage-main" id="home">
                    <div className="homepage-main-left">
                        <Title smallText={"Những bản in chất lượng khai phá nên những ý tưởng thiên tài"}/>
                        <Button
                            text={"Khám phá ngay"}  
                            // TODO
                            link={"#"}
                        />
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
                            icon={<FontAwesomeIcon icon={faFaceSmile} size="6x" color="#0D99FF"/>}
                            title="Tư vấn nhiệt tình"
                            description="Bạn sẽ được tư vấn, hướng dẫn nhiệt tình bởi chúng tôi"
                        />
                        <IconCard 
                            icon={<FontAwesomeIcon icon={faPrint} size="6x" color="#0D99FF"/>}
                            title="In tài liệu"
                            description="Cung cấp dịch vụ in ấn tài liệu với đa dạng các kiểu tài liệu phổ biến"
                        />
                        <IconCard 
                            icon={<FontAwesomeIcon icon={faListCheck} size="6x" color="#0D99FF"/>}
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