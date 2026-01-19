import React, { useState } from 'react'
import "./Size.css"
import image25 from "../../assets/svg/25.svg"
import image26 from "../../assets/svg/26.svg"
import image27 from "../../assets/svg/27.svg"
import image28 from "../../assets/svg/28.svg"


function Size() {
    const price = 115;
    const [count, setCount] = useState(1);

    return (
        <div className='product-info-content'>
            <div className='product-title-section'>
                <h1 className='product-title'>TRUE LOVE</h1>
                <span className='product-price'>$ 115,00</span>
                <p className='product-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span className='show-more-link'> SHOW MORE</span>
                </p>
            </div>

            <div className='Size-s'>
                <h1>Size:</h1>
                <button className='size-button'>S</button>
                <button className='size-button'>M</button>
                <button className='size-button'>L</button>
            </div>

            <div className="cart">
                <h1 className="total">Total $ {(price * count).toFixed(2)}</h1>

                <div className="controls">
                    <button className="btn" onClick={() => setCount(count > 1 ? count - 1 : 1)}>
                        -
                    </button>

                    <span className="count">{count}</span>

                    <button className="btn" onClick={() => setCount(count + 1)}>
                        +
                    </button>
                </div>

                <button className="add">ADD TO CART</button>
            </div>

            <div className='CHECK'>
                <h1>Check availability at:</h1>
                <input type="text" placeholder='Enter zipcode...' />
                <button>CHECK YOUR ZIPCODE</button>
            </div>

            <div className='Small'>
                <h1>Add A Small Extra Gift</h1>
                <h2>VIEW ALL</h2>
                <div className='pink'></div>
            </div> <br />
            <div className='but'>
                <div className='cardd'>
                    <img src={image25} alt="" />
                    <h1>Candle</h1>
                    <h2>$ 50,00</h2>
                </div>

                <div className='cardd'>
                    <img src={image26} alt="" />
                    <h1>Bath Bomb</h1>
                    <h2>$ 70,00</h2>
                </div>

                <div className='cardd'>
                    <img src={image27} alt="" />
                    <h1>Premium Greeting Card</h1>
                    <h2>$ 100,00</h2>
                </div>

                <div className='cardd'>
                    <img src={image28} alt="" />
                    <h1>Candle</h1>
                    <h2>$ 65,00</h2>
                </div>
            </div>

        </div>
    )
}

export default Size
