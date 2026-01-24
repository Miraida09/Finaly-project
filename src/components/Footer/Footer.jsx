import React from 'react'
import "./Footer.css"
import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";

import Image2 from "../../assets/svg/02.svg"
import Image3 from "../../assets/svg/03.svg"
import Image4 from "../../assets/svg/04.svg"
import Image5 from "../../assets/svg/05.svg"

function Footer() {
    return (
        <footer className="Footer">
            <div className="container">

                {/* SERVICES */}
                <div className="footer-col">
                    <h2>SERVICES</h2>
                    <ul>
                        <li>Delivery & Pick Up</li>
                        <li>FAQ</li>
                        <li>How to consume & store gifts</li>
                        <li>How to carry flowers</li>
                        <li>Corporate gifts</li>
                        <li>Privacy Policy</li>
                        <li>Cancelation & Refund</li>
                        <li>Terms Of Service</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h2>CONTACT US</h2>

                    <div className="contact-item">
                        <FaInstagram />
                        <a href="https://instagram.com/strawbarbie_syd" target="_blank">
                            @strawbarbie_syd
                        </a>
                    </div>

                    <div className="contact-item">
                        <CgMail />
                        <span>alab37306@gmail.com</span>
                    </div>

                    <div className="contact-item">
                        <BsTelephone />
                        <span>+996 557119412</span>
                    </div>

                    <p className="address">
                        Pick Up Address:<br />
                        1 C Betty Cuthbert Avenue,<br />
                        Sydney Olympic Park, 2127
                    </p>

                    <span className="copy">©2022 StrawBarbie</span>
                </div>

                <div className="footer-images">
                    <img src={Image2} alt="" />
                    <img src={Image3} alt="" />
                    <img src={Image4} alt="" />
                    <img src={Image5} alt="" />
                </div>

            </div>
        </footer>
    )
}

export default Footer
