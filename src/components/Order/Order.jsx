import React from 'react'
import "./Order.css"
import imege08 from "../../assets/svg/08.svg"
import imege35 from "../../assets/svg/35.svg"
import imege36 from "../../assets/svg/36.svg"
import { RxCross1 } from "react-icons/rx";


function Order() {
    return (
        <div className='Order'>
            <div className='Order-1'>
                <h1>ORDER SUMMARY</h1>
                <h2>RETURN TO SHOP</h2>

            </div>
            <p>3 items</p>
            <div className='true-1'> <br />
                <div>
                    <img src={imege08} alt="" />

                </div>
                <div className='True'>
                    <h1>True Love</h1>
                    <h2>S</h2>
                    <h3>$ 120,00</h3>
                    <RxCross1 className='cross' />

                </div>
            </div> <br /><br /><br />
            <div className='true-1'> <br />
                <div>
                    <img src={imege35} alt="" />

                </div>
                <div className='True'>
                    <h1>Hugs & Kisses</h1>
                    <h2>S</h2>
                    <h3>$ 120,00</h3>
                    <RxCross1 className='cross' />

                </div>
            </div> <br /><br /><br />
            <div className='true-1'> <br />
                <div>
                    <img src={imege36} alt="" />

                </div>
                <div className='True'>
                    <h1>Tender Adoration</h1>
                    <h2>S</h2>
                    <h3>$ 120,00</h3>
                    <RxCross1 className='cross' />

                </div>
            </div>
            <div className='croos'></div>
            <div className='total'>
                <h1>total </h1>
                <h1>$ 360,00</h1>
            </div>
            <div className='total-1'>
                <h2>SHIPPING</h2>
                <h2>Free shipping</h2>
            </div>
        </div>
    )
}

export default Order
