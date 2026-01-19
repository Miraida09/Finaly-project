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
        <footer className='Footer'>
            <div className='container'>
                <div>
                    <h2>SERVICES</h2>
                    <p>
                        Delivery & Pick Up <br />

                        FAQ <br />

                        How to consume & store an edible gifts <br />

                        How to carry the flowers <br />
                        Corporate gifts <br />

                        Privacy Policy <br />

                        Cancelation & Refund Policy <br />

                        Terms Of Service <br />
                    </p>
                </div>
                <div>
                    <div>
                        <h2>CONTACT US</h2>
                    </div>
                    <div>
                        <FaInstagram />
                        <a href="@strawbarbie_syd"></a>
                    </div>
                    <div>
                        <CgMail />

                    </div>
                    <div>
                        <BsTelephone />

                    </div>
                    <p>
                        Pick Up Address: <br />
                        1 C Betty Cuthbert Avenue, <br />
                        Sydney Olympic Park, 2127 <br />
                        <span>©2022 StrawBarbie</span>
                    </p>
                </div>
                <div className='Image1'>
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
