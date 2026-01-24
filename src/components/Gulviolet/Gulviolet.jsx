import React from 'react'
import "./Gulviolet.css"
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Gulviolet() {
    return (
        <div className='Gulviolet'>
            <div className='Gulrose-card'>
                <img src="https://cvetarius.ru/wa-data/public/shop/products/77/03/377/images/699/699.1000x1000.jpg" alt="" />
                <div className='pr-card'>
                    <p>40%</p>
                </div>
                <Link to="/like"><FaRegHeart className='heart' /></Link>
                <div className='card-zx'>
                    <h1>Rosé Deluxe</h1>
                    <p>1000с</p>
                    <button>buy</button>
                </div>
            </div>
            <div className='Gulrose-card'>
                <img src="https://cvmarket.ru/upload/webp/resize_cache/dfd/800_800_1ebb21f0790a147b6ddde8e3a287368e0/zhbeezse5ltsn34tyy2t828q24jq5c7l.webp" alt="" />
                <div className='pr-card'>
                    <p>40%</p>
                </div>
                <Link to="/like"><FaRegHeart className='heart' /></Link>
                <div className='card-zx'>
                    <h1>Rosé Deluxe</h1>
                    <p>1000с</p>
                    <button>buy</button>
                </div>
            </div>
            <div className='Gulrose-card'>
                <img src="https://cvetarius.ru/wa-data/public/shop/products/83/04/483/images/3957/3957.1000x1000.jpg" alt="" />
                <div className='pr-card'>
                    <p>40%</p>
                </div>
                <Link to="/like"><FaRegHeart className='heart' /></Link>
                <div className='card-zx'>
                    <h1>Rosé Deluxe</h1>
                    <p>1000с</p>
                    <button>buy</button>
                </div>
            </div>
            <div className='Gulrose-card'>
                <img src="https://favorit-flowers.ru/images/product_images/popup_images/29876_0.jpg" alt="" />
                <div className='pr-card'>
                    <p>40%</p>
                </div>
                <Link to="/like"><FaRegHeart className='heart' /></Link>
                <div className='card-zx'>
                    <h1>Rosé Deluxe</h1>
                    <p>1000с</p>
                    <button>buy</button>
                </div>
            </div>


        </div>
    )
}

export default Gulviolet
