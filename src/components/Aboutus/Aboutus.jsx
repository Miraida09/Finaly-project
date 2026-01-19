import React from 'react'
import "./Aboutus.css"
import image15 from "../../assets/svg/15.svg"
import image16 from "../../assets/svg/16.svg"
import image17 from "../../assets/svg/17.svg"

function Aboutus() {
    return (
        <section className='about__ container'>
            <div className='about__image-wrapper'>
                <img className='about__image' src={image17} alt="About us" />
            </div>
            <div className='about__content'>
                <h1 className='about__title'>ABOUT US</h1>
                <p className='about__text'>
                    We are not the only sellers of chocolate dipped strawberries and flowers in Sydney, but we are probably the only ones who combine the Finest Belgian Chocolate, Strawberries with Fresh Cut Flowers to bring happiness to you and your loved ones.
                    <br /><br />
                    We will never be below your expectations and will do our best to stay a part of your memories.
                </p>
            </div>
        </section>
    )
}

export default Aboutus
