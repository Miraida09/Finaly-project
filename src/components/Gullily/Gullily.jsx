import React from 'react'
import "./Gullily.css"
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Gullily() {
    return (
        <div className='Gullily'>
            <div className='Gulrose-card'>
                <img src="https://kenzan.kg/image/cache/catalog/IMG_0955-285x285.jpeg" alt="" />
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
                <img src="https://buketopt.ru/upload/resize_cache/iblock/da7/1199_1199_14bd9de518dfe6e8e138a6a8540ab5874/da7ea35651ea36c2023398e5027af16c.JPG" alt="" />
                <div className='pr-card'>
                    <p>40%</p>
                </div>
                <Link to="/like"><FaRegHeart className='heart' /></Link>
                <div className='card-zx'>
                    <h1>Rosé Deluxe</h1>
                    <p>1000с</p>
                    <button>buy</button>
                </div>
            </div> <div className='Gulrose-card'>
                <img src="https://butterfly-flower.ru/img/work/nomencl/a_9008046_20360.webp" alt="" />
                <div className='pr-card'>
                    <p>40%</p>
                </div>
                <Link to="/like"><FaRegHeart className='heart' /></Link>
                <div className='card-zx'>
                    <h1>Rosé Deluxe</h1>
                    <p>1000с</p>
                    <button>buy</button>
                </div>
            </div> <div className='Gulrose-card'>
                <img src="https://venusinfleurs.ru/image/catalog/product/2865/2865_1.jpg" alt="" />
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

export default Gullily
