import React from 'react';
import "./Footer.css";
import { FaWhatsapp , FaFacebook , FaTwitter , FaLinkedin , FaInstagram} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import img1 from "../../images/eg.png";
import img2 from "../../images/sa.png";
import img3 from "../../images/ae.png"
import img4 from "../../images/qa.png";
import img5 from "../../images/bh.png"
import img6 from "../../images/sr.png";
import img7 from "../../images/iq.png";
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-flex">
            <div className="footer-left">
                <h2>Contact Us</h2>
                <div>
                    <i><FaWhatsapp/></i>
                    <a href="https://api.whatsapp.com/send/?phone=201282020076&text&type=phone_number&app_absent=0" target='_blank'>+02 1282010076</a>
                </div>
                <div>
                    <i><AiOutlineMail/></i>
                    <a href=""> contact@guitaraagency.com</a>
                </div>
                <div>
                    <i><IoLocationOutline/></i>
                    <a href="https://www.google.com/maps/place/Guitara+grop/@30.1060769,31.3452172,766m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1458150005ed3169:0x752adabe933c3121!8m2!3d30.1060769!4d31.3452172!16s%2Fg%2F11ybks4hyw?hl=ar&entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D" target='_blank'> 1 Mahmoud Taimour St, Almaza, Heliopolis, Cairo</a>
                </div>
            </div>
            <div className="centere">
                <div className='one'>
                    <i><FaFacebook/></i>
                    <i><FaTwitter/></i>
                    <i><FaLinkedin/></i>
                    <i><FaInstagram/></i>
                </div>
                <span className='span-one'></span>
                <div className='two'>
                    <div>
                        <img src={img1} alt= "" />
                        <p>Egypt:2249</p>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                        <p>SaudiArabia:30</p>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                        <p>UAE:0</p>
                    </div>
                    <div>
                        <img src={img4} alt="" />
                        <p>Qatar:0</p>
                    </div>
                    <div>
                        <img src={img5} alt="" />
                        <p>Bahrain:0</p>
                    </div>
                    <div>
                        <img src={img6} alt="" />
                        <p>Syria:0</p>
                    </div>
                    <div>
                        <img src={img7} alt="" />
                        <p>Iraq:0</p>
                    </div>
                </div>
                <span className='span-two'></span>
            </div>
            <div className="footer-right"></div>
        </div>
        <p className='p'>©2025 GuitaraGroup | All Rights Reserved</p>
    </div>
  );
}

export default Footer;
