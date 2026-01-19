import React from 'react'
import "./Card.css"
import image11 from "../../assets/svg/11.svg"
import image12 from "../../assets/svg/12.svg"
import image13 from "../../assets/svg/13.svg"
import image14 from "../../assets/svg/14.svg"
import { IoBag } from "react-icons/io5";

function Card() {
  
    const products = [
        { img: image11, title: "HUGS & KISSES", price: "$ 79.00-149.00" },
        { img: image12, title: "STRAWBERRY BLISS", price: "$ 139.00-269.00" },
        { img: image13, title: "BE MY VALENTINE", price: "$ 109.00-249.00" },
        { img: image14, title: "COTTON CANDY", price: "$ 65.00-175.00" },
        { img: image11, title: "HUGS & KISSES", price: "$ 79.00-149.00" },
        { img: image12, title: "STRAWBERRY BLISS", price: "$ 139.00-269.00" },
        { img: image13, title: "BE MY VALENTINE", price: "$ 109.00-249.00" },
        { img: image14, title: "COTTON CANDY", price: "$ 65.00-175.00" },
    ];

    return (
        <section className='bestsellers__ container'>
            <div className='bestsellers__header'>
                <h1 className='bestsellers__title'>OUR BEST SELLERS</h1>
                <p className='bestsellers__subtitle'>Select a category or go to the section with a convinient filter by product</p>
            </div>
            <div className="bestsellers__tabs">
                <button className='bestsellers__tab'>ALL PRODUCTS</button>
                <button className='bestsellers__tab'>HAPPY BIRTHDAY</button>
                <button className='bestsellers__tab'>CONGRATULATION</button>
                <button className='bestsellers__tab'>ANNIVERSARY</button>
                <button className='bestsellers__tab'>GET WELL</button>
            </div>
            <div className='bestsellers__grid'>
                {products.map((product, index) => (
                    <div key={index} className='bestsellers__card'>
                        <img className='bestsellers__image' src={product.img} alt={product.title} />
                        <div className='bestsellers__card-info'>
                            <div>
                                <h3 className='bestsellers__card-title'>{product.title}</h3>
                                <p className='bestsellers__card-price'>{product.price}</p>
                            </div>
                            <button className='bestsellers__cart-icon' aria-label="Add to cart">
                                <IoBag className='bestsellers__cart-icon-svg' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='bestsellers__footer'>
                <button className='bestsellers__view-all'>VIEW ALL</button>
            </div>
        </section>
    )
}

export default Card
