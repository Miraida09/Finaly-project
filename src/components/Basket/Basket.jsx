import React, { useState } from 'react'
import "./Basket.css"
import image32 from "../../assets/svg/32.svg"

function Basket() {

    const [count, setCount] = useState(0);

    return (
        <div className='Basket'>
            <div className='Your-card'>
                <h1>YOUR CART</h1>
                <h3>RETURN TO SHOP</h3>

            </div>
            <div className='to-shop'>
                <img src={image32} alt="" />

                <div className='Sweet'>
                    <h1>Sweet Perfection</h1>
                    <h2>M</h2>
                    <h3>$ 153,00</h3>
                </div>
                <div className="counter-box">
                    <button className="btn" onClick={() => setCount(count > 1 ? count - 1 : 1)}>
                        -
                    </button>

                    <span className="counter-number">{count}</span>

                    <button className="btn" onClick={() => setCount(count + 1)}>
                        +
                    </button>
                </div>
            </div>


        </div>
    )

}

export default Basket
