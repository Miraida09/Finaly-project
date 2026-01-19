import React from 'react';
import "./Information.css";

function Information() {
    return (
        <section className='testimonials__ container'>
            <div className='testimonials__header'>
                <h1 className='testimonials__title'>OUR HAPPY CLIENTS</h1>
                <p className='testimonials__subtitle'>What they say about us</p>
            </div>
            <div className='testimonials__grid'>
                <div className='testimonials__card'>
                    <h3 className='testimonials__card-name'>Jessie</h3>
                    <p className='testimonials__card-text'>
                        Thank you so much for the incredible order! They were so fresh and delicious 💖 Thank you so much for being so accommodating and so so so lovely! I will definitely be ordering from you again 🙏
                    </p>
                </div>
                <div className='testimonials__card'>
                    <h3 className='testimonials__card-name'>Maria</h3>
                    <p className='testimonials__card-text'>
                        Absolutely beautiful. My niece was ecstatic with how beautiful her bouquet is. She has shared photos with me & mum & we are over the moon. You are amazing 🤩 You have a wonderful talent. Thank you, thank you, thank you. I will be telling all my friends & family about you 💖
                    </p>
                </div>
                <div className='testimonials__card'>
                    <h3 className='testimonials__card-name'>Clare</h3>
                    <p className='testimonials__card-text'>
                        Anna I just want to say a huge thank you for making my sister feel special. Your arrangement was simply stunning and the perfect gift for this occasion. You did an amazing job. I will certainly keep your details to use in the future. My daughter is having her first baby (boy) in a few months time so that might be my next occasion! Thanking you, Clare
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Information;
