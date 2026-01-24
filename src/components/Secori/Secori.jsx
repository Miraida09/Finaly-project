import React from 'react'
import "./Secori.css"
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";





function Secori() {
    return (
        <div className='Secori'> <br />
            <h1>SECURE CHECKOUT</h1>
            <p>Some day flower delivery to Sydnay suburbs, <br /> Monday to Saturday. Urgen delivery? Questions? <br />
                Call us on (0687) 876 54 32</p> <br />
            <div className='Secori-text'>
                <h1>NEW BUYER</h1>
                <h2>ReGULAR CUSTOMER</h2>
            </div>
            <div className='secori-icon'>
                <div className='icons-1'>
                    <TbCircleNumber1Filled className='icons' />
                    <h1>Your Details </h1>
                </div>
                <div className='icons-1'>
                    <TbCircleNumber2 className='icons' />
                    <h1>DELIVERY DETAILS</h1>
                </div>
                <div className='icons-1'>
                    <TbCircleNumber3 className='icons' />
                    <h1>MESSAGE CARD</h1>
                </div>
            </div>
        </div>
    )
}

export default Secori
