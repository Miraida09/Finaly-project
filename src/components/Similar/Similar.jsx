import React from 'react'
import "./Similar.css"
import image29 from "../../assets/svg/29.svg"
import image30 from "../../assets/svg/30.svg"
import image31 from "../../assets/svg/31.svg"


function Similar() {
    return (
        <div className='Similar container'>
            <h1>Similar Items</h1> <br />
            <div className='tender-1'>
                <div className='tender'>
                    <img src={image30} alt="" />
                    <h1>WHITE ROSES</h1>
                    <h2>$ 89,00 - 345,00</h2>
                </div>
                <div className='tender'>
                    <img src={image31} alt="" />
                    <h1>TENDER ADORATION</h1>
                    <h2>$ 135,00 - 269,00</h2>
                </div>
                <div className='tender'>
                    <img src={image29} alt="" />
                    <h1>BE MY VALENTINE</h1>
                    <h2>$ 109,00 - 249,00</h2>
                </div>
            </div>
        </div>
    )
}

export default Similar
