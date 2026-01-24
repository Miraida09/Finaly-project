import React from 'react'
import "./Storee.css"
import image33 from "../../assets/svg/33.svg"
import image34 from "../../assets/svg/34.svg"


function Storee() {
    return (
        <div className=' Storee'>
            <h1>Cart totals</h1>
            <h2>SUBTOTAL</h2>
            <p>$ 356,00  AUD</p>
            <p></p>
            <img className='card-image-1' src={image33} alt="" />
            <img className='card-image-2' src={image34} alt="" />
            <input type="text" placeholder='Thu, 18 August, 2022' />
            <div className='stor'></div>
            <div className='stor-1'>
                <h1>TOTAL</h1>
                <h1>$ 356,00</h1>
            </div>
            <button className='card-btn'>PROCEED TO CHECKOUT</button>
            <h4>Congratulations! You are eligible for free shipping.</h4>
        </div>
    )
}

export default Storee
