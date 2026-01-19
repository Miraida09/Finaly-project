import React from 'react'
import "./Card.css"
import image11 from "../../assets/svg/11.svg"
import image12 from "../../assets/svg/12.svg"
import image13 from "../../assets/svg/13.svg"
import image14 from "../../assets/svg/14.svg"
import { IoBag } from "react-icons/io5";


function Card() {
    return (
        <div className='Card'>
            <div className="container">
                <h1 className='Text'>OUR BEST SELLERS</h1>
                <p className='text-1'>Select a category or go to the section with a convinient filter by product</p>
            </div>
            <div className="button">
                <button className='btns'>ALL PRODUCTs</button>
                <button className='btns'>happy birthday</button>
                <button className='btns'>Congratulation</button>
                <button className='btns'>Anniversary</button>
                <button className='btns'>Get well</button>
            </div>
            <div className='card-mein'>
                <div className='card-title'>
                    <img className='image-title' src={image11} alt="" />
                    <div className='card-info'>
                        <div>
                            <h1>HUGS & KISSES</h1>
                            <p>$ 79.00-149.00</p>

                        </div>
                        <div className='icon'>
                            <IoBag className='icon-bag' />

                        </div>
                    </div>

                </div>
                <div className='card-title'>
                    <img className='image-title' src={image12} alt="" />
                    <div className='card-info'>
                        <div>
                            <h1>STRAWBERRY BLISS</h1>
                            <p>$ 139.00-269.00</p>

                        </div>
                        <div className='icon'>
                            <IoBag className='icon-bag' />

                        </div>
                    </div>

                </div> <div className='card-title'>
                    <img className='image-title' src={image13} alt="" />
                    <div className='card-info'>
                        <div>
                            <h1>BE MY VALENTINE</h1>
                            <p>$ 109.00-249.00</p>

                        </div>
                        <div className='icon'>
                            <IoBag className='icon-bag' />

                        </div>
                    </div>

                </div> <div className='card-title'>
                    <img className='image-title' src={image14} alt="" />
                    <div className='card-info'>
                        <div>
                            <h1>COTTON CANDY</h1>
                            <p>$ 65.00-175.00</p>

                        </div>
                        <div className='icon'>
                            <IoBag className='icon-bag' />

                        </div>
                    </div>

                </div>
            </div>
            <div className='button-s'>
                <button className='Btns'>VIEW ALL</button>

            </div>
        </div>
    )
}

export default Card
