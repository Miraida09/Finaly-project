import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/svg/01.svg"
import { FiSearch } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";







function Header() {
    return (
        <div className='Header'>
            <Link to="/about">Service</Link>


            <span>
                7 DAYS A WEEK | Order by 5 pm For The Next Day Delivery | Delivering within 50 km from Sydney Olympic Park | Free Delivery Over $199 | Free Pick Up Available
            </span>
            <div className='middle-header'>

                <img className='logo' src={logo} alt="" />

                <div className='box'>
                    <input type="text" placeholder='Search...' />

                    <FiSearch className='Fiserch' />
                </div>
                <div className='container-icon'>

                    <div>
                        <FaRegHeart />

                    </div>

                    <div>
                        <IoBagOutline />

                    </div>
                </div> <hr />
            </div>
            <div className='title-shop'>
                <Link to="/" className='shop'>HOME</Link>
                <Link to="/contact" className='shop' >CONTACT</Link>
                <Link to="/catigori" className='shop'>CATIGORI</Link>
                <Link to="/about" className='shop'>ABOUT</Link>
                <Link to="/contacts" className='shop'>CONTACTS</Link>
            </div>

        </div>
    )
}

export default Header
