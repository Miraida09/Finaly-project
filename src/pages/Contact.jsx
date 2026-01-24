import React, { useState } from 'react';
import '../styles/ProductDetails.css';
import Image8 from '../assets/svg/08.svg';
import image25 from '../assets/svg/25.svg';
import image26 from '../assets/svg/26.svg';
import image27 from '../assets/svg/27.svg';
import image28 from '../assets/svg/28.svg';
import image29 from '../assets/svg/29.svg';
import image30 from '../assets/svg/30.svg';
import image31 from '../assets/svg/31.svg';
import { IoBag } from "react-icons/io5";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Contact() {
    const [selectedImage, setSelectedImage] = useState(Image8);
    const [selectedSize, setSelectedSize] = useState(null);
    const [count, setCount] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const price = 115;

    const thumbnails = [Image8, Image8, Image8, Image8];
    const currentImageIndex = thumbnails.findIndex(img => img === selectedImage);

    const extraGifts = [
        { img: image25, name: "Candle", price: "$ 50,00" },
        { img: image26, name: "Bath Bomb", price: "$ 70,00" },
        { img: image27, name: "Premium Greeting Card", price: "$ 100,00" },
        { img: image28, name: "Candle", price: "$ 65,00" },
    ];

    const similarProducts = [
        { img: image30, title: "WHITE ROSES", price: "$ 89,00 - 345,00" },
        { img: image31, title: "TENDER ADORATION", price: "$ 135,00 - 269,00" },
        { img: image29, title: "BE MY VALENTINE", price: "$ 109,00 - 249,00" },
    ];

    const handlePrevImage = () => {
        const prevIndex = currentImageIndex > 0 ? currentImageIndex - 1 : thumbnails.length - 1;
        setSelectedImage(thumbnails[prevIndex]);
    };

    const handleNextImage = () => {
        const nextIndex = currentImageIndex < thumbnails.length - 1 ? currentImageIndex + 1 : 0;
        setSelectedImage(thumbnails[nextIndex]);
    };

    return (
        <div className="container">
            <section className="pd">

                <div className="pd__top">

                    <aside className="pd__thumbs">
                        {thumbnails.map((thumb, index) => (
                            <button
                                key={index}
                                className={`pd__thumb ${selectedImage === thumb ? 'pd__thumb--active' : ''}`}
                                onClick={() => setSelectedImage(thumb)}
                                aria-label={`View image ${index + 1}`}
                            >
                                <img src={thumb} alt={`Thumbnail ${index + 1}`} />
                            </button>
                        ))}
                    </aside>


                    <div className="pd__media">
                        <img src={selectedImage} alt="Product" className="pd__img" />
                        <div className="pd__mediaNav">
                            <button
                                className="pd__mediaNav__arrow pd__mediaNav__arrow--prev"
                                onClick={handlePrevImage}
                                aria-label="Previous image"
                            >
                                <IoChevronBack />
                            </button>
                            <div className="pd__mediaNav__dots">
                                {thumbnails.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`pd__mediaNav__dot ${currentImageIndex === index ? 'pd__mediaNav__dot--active' : ''}`}
                                        onClick={() => setSelectedImage(thumbnails[index])}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                className="pd__mediaNav__arrow pd__mediaNav__arrow--next"
                                onClick={handleNextImage}
                                aria-label="Next image"
                            >
                                <IoChevronForward />
                            </button>
                        </div>
                    </div>


                    <aside className="pd__info">
                        <h1 className="pd__info__title">TRUE LOVE</h1>
                        <div className="pd__info__price">$ 115,00</div>
                        <p className="pd__info__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <button className="pd__info__showMore"> SHOW MORE</button>
                        </p>

                        <div className="pd__sizeRow">
                            <span className="pd__sizeRow__label">Size:</span>
                            <button
                                className={`pd__sizeBtn ${selectedSize === 'S' ? 'pd__sizeBtn--active' : ''}`}
                                onClick={() => setSelectedSize('S')}
                            >
                                S
                            </button>
                            <button
                                className={`pd__sizeBtn ${selectedSize === 'M' ? 'pd__sizeBtn--active' : ''}`}
                                onClick={() => setSelectedSize('M')}
                            >
                                M
                            </button>
                            <button
                                className={`pd__sizeBtn ${selectedSize === 'L' ? 'pd__sizeBtn--active' : ''}`}
                                onClick={() => setSelectedSize('L')}
                            >
                                L
                            </button>
                        </div>

                        <div className="pd__qtyRow">
                            <div className="pd__qtyBox">
                                <div className="pd__qtyBox__total">Total $ {(price * count).toFixed(2)}</div>
                                <div className="pd__qtyBox__controls">
                                    <button
                                        className="pd__qtyBtn"
                                        onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                        aria-label="Decrease quantity"
                                    >
                                        -
                                    </button>
                                    <span className="pd__qtyVal">{count}</span>
                                    <button
                                        className="pd__qtyBtn"
                                        onClick={() => setCount(count + 1)}
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button className="pd__addBtn">ADD TO CART</button>
                        </div>

                        <div className="pd__zipRow">
                            <label className="pd__zipRow__label">Check availability at:</label>
                            <div className="pd__zipRow__inputGroup">
                                <input
                                    type="text"
                                    placeholder="Enter zipcode..."
                                    className="pd__zipRow__input"
                                />
                                <button className="pd__zipRow__btn">CHECK YOUR ZIPCODE</button>
                            </div>
                        </div>

                        <div className="pd__giftHeader">
                            <h2 className="pd__giftHeader__title">Add A Small Extra Gift</h2>
                            <button className="pd__giftHeader__viewAll">VIEW ALL</button>
                        </div>
                        <div className="pd__giftHeader__divider"></div>
                        <div className="pd__giftGrid">
                            {extraGifts.map((gift, index) => (
                                <div key={index} className="pd__giftItem">
                                    <img src={gift.img} alt={gift.name} className="pd__giftItem__img" />
                                    <h3 className="pd__giftItem__name">{gift.name}</h3>
                                    <p className="pd__giftItem__price">{gift.price}</p>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>


                <div className="pd__bottom">
                    <div className="pd__tabsCol">
                        <div className="pd__tabs">
                            <button
                                className={`pd__tab ${activeTab === 'description' ? 'pd__tab--active' : ''}`}
                                onClick={() => setActiveTab('description')}
                            >
                                DESCRIPTION
                            </button>
                            <button
                                className={`pd__tab ${activeTab === 'additional' ? 'pd__tab--active' : ''}`}
                                onClick={() => setActiveTab('additional')}
                            >
                                ADDITIONAL INFORMATION
                            </button>
                        </div>
                        <div className="pd__tabPanel">
                            {activeTab === 'description' && (
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat,
                                    augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit
                                    ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
                                    Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.
                                </p>
                            )}
                            {activeTab === 'additional' && (
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat,
                                    augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit
                                    ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
                                    Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.
                                </p>
                            )}
                        </div>
                    </div>
                </div>


                <section className="pd__similar">
                    <h2 className="pd__similar__title">SIMILAR ITEMS</h2>
                    <div className="pd__similarGrid">
                        {similarProducts.map((product, index) => (
                            <div key={index} className="pd__card">
                                <img src={product.img} alt={product.title} className="pd__card__img" />
                                <h3 className="pd__card__title">{product.title}</h3>
                                <p className="pd__card__price">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Contact;
