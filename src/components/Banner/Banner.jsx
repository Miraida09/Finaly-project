import React, { useState, useEffect } from 'react'
import image7 from "../../assets/svg/07.svg"
import image9 from "../../assets/svg/09.svg"
import image10 from "../../assets/svg/10.svg"
import "./Banner.css"

const slides = [
    {
        image: image7,
        title: "gourmet gifts",
        subtitle: "for any occasion",
        type: "h3"
    },
    {
        image: image9,
        title: "Chocolate Strawberries Boxes",
        subtitle: "Freshly Made Every Morning",
        type: "p"
    },
    {
        image: image10,
        title: "Roses & Chocolate",
        subtitle: "Strawberries Arrangements",
        description: "Handcrafted&Fresh Edible Bouquets",
        type: "h3"
    }
];

function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='banner'>
            <div className='banner-slides'>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <img src={slide.image} alt={slide.title} />
                        <div className='banner-caption'>
                            <div className='caption-content'>
                                <h1 className='caption-title'>{slide.title}</h1>
                                {slide.type === 'h3' ? (
                                    <h3 className='caption-subtitle'>{slide.subtitle}</h3>
                                ) : (
                                    <p className='caption-subtitle'>{slide.subtitle}</p>
                                )}
                                {slide.description && (
                                    <p className='caption-description'>{slide.description}</p>
                                )}
                                <button className='btn btn-primary caption-button'>SHOP</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='banner-indicators'>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`banner-indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div> 
        </div> 
    )
}

export default Banner
