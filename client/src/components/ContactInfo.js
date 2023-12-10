import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import "../styles/contact-info.css";

export default function ContactInfo() {
    return (
        <div className="contact-info">
            <h2>Liên hệ với chúng tôi</h2>
            <p>+84 123 456 789</p>
            <p>address@email.com</p>
            <p>Address, Street, HCMC</p>
            <div className="social-media">
                <a href="https://www.facebook.com/phuong.ngo0320/">
                    <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faTelegram} size="3x" />
                </a>    
            </div>
        </div>
    );
}