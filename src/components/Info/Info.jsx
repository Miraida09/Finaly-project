import React from 'react'
import "./Info.css"
import image18 from "../../assets/svg/18.svg"
function Info() {
    return (
        <div className='info'>
            <img src={image18} alt="" />
            <div className='get-info'>
                <h1>GET DISCOUNT INFO</h1>
                <p>
                    Subscribe discount newsletter for get notification <br />
                    about new information discount, etc.
                </p>
                <input type="text" placeholder='Enter your email' /> <br />
                <button>SUBSCRIBE</button>
            </div>
        </div>
    )
}

export default Info
