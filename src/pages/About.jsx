import React from "react";
import "../styles/About.css";

function About() {
    return (
        <section className="about">
            <div className="about-container">

                <div className="about-text">
                    <h2>About SweetBloom</h2>

                    <p className="about-desc">
                        SweetBloom is more than just a flower shop.
                        We combine the delicate beauty of fresh flowers
                        with the irresistible taste of chocolate-covered strawberries
                        to create unforgettable moments.
                    </p>

                    <p>
                        Every arrangement is handcrafted with love and attention to detail.
                        For us, a gift is not just a product — it is an emotion, a memory,
                        and a way to express care and affection.
                    </p>

                    <div className="about-features">
                        <div>
                            <span>🌸</span>
                            <h4>Fresh Flowers</h4>
                            <p>Carefully selected daily</p>
                        </div>

                        <div>
                            <span>🍓</span>
                            <h4>Sweet Strawberries</h4>
                            <p>Only fresh, premium strawberries</p>
                        </div>

                        <div>
                            <span>🍫</span>
                            <h4>Premium Chocolate</h4>
                            <p>High-quality Belgian chocolate</p>
                        </div>

                        <div>
                            <span>🎁</span>
                            <h4>Elegant Packaging</h4>
                            <p>Luxury boxes and stylish design</p>
                        </div>
                    </div>

                    <button className="about-btn">Learn More</button>
                </div>

                <div className="about-image">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0610/3980/4463/files/1_-_7.2_Blooms_Berries_Perfect_Pair_480x480.jpg?v=1720419952"
                        alt="Flowers and chocolate strawberries"
                    />
                </div>

            </div>
        </section>
    );
}

export default About;
