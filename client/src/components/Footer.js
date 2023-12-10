import { faFacebook, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="upper">
                <div>
                    <h2>Dịch vụ</h2>

                </div>
                <div>
                    <h2>Thông tin thêm</h2>
                    <ul>
                        <li><a href="#">Hỏi đáp</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Yêu cầu hỗ trợ</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Công ty</h2>
                    <ul>
                        <li><a href="#">Về chúng tôi</a></li>
                        <li><a href="#">Liên hệ</a></li>
                        <li className="social-media">
                            <a href="https://www.facebook.com/phuong.ngo0320/">
                                <FontAwesomeIcon icon={faFacebook} color="#049DFF" size="2x"/>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} color="#049DFF" size="2x"/>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faTelegram} color="#049DFF" size="2x"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="register-email">
                    <h2>Đăng ký nhận thông tin</h2>
                    <form action="" method="post">
                        <label htmlFor="reg-email">Nhập email</label>
                        <input type="email" name="reg-email" id="reg-email" />
                        <input type="submit" value="->" />
                    </form>
                </div>
            </div>
            <div className="lower">
                <ul>
                    <li><a href="#">Điều khoản</a></li>
                    <li><a href="#">Bảo mật</a></li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
        </div>
    );
}