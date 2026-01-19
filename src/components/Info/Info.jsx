import React from 'react';
import "./Info.css";
import image18 from "../../assets/svg/18.svg";

function Info() {
    return (
        <section className='discount__'>
            <img src={image18} alt="Discount banner" className='discount__image' />
            <div className='discount__overlay'></div>
            <div className='discount__content'>
                <h1 className='discount__title'>GET DISCOUNT INFO</h1>
                <p className='discount__subtitle'>
                    Subscribe discount newsletter for get notification about new information discount, etc.
                </p>
                <form className='discount__form'>
                    <input 
                        type="email" 
                        placeholder='Enter your email' 
                        className='discount__input'
                        required
                    />
                    <button type="submit" className='discount__button'>SUBSCRIBE</button>
                </form>
            </div>
        </section>
    );
}

export default Info;
