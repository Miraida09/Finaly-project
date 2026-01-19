import React from 'react'
import "./Aboutus.css"
import image15 from "../../assets/svg/15.svg"
import image16 from "../../assets/svg/16.svg"
import image17 from "../../assets/svg/17.svg"


function Aboutus() {
    return (
        <div className='Aboutuscz '>
            <img className='image-picture-3' src={image17} alt="" />

            <img className='image-picture-1' src={image15} alt="" />
            <img className='image-picture-2' src={image16} alt="" />
            <div className='text-us'>
                <h1>ABOUT US</h1>
                <p>
                    We are not the only sellers of chocolate dipped <br /> strawberries and flowers in Sydney, but we are  <br />probably the only ones who combine the Finest <br /> Belgian Chocolate, Strawberries with Fresh Cut <br /> Flowers to bring happiness to you and your loved <br /> ones. <br />

                    We will never be below your expectations and will <br />
                    do our best to stay a part of your memories.

                </p>
            </div>

        </div>
    )
}

export default Aboutus
