import React from 'react'
import "./Gul.css"
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Gul() {
    return (
        <div className='Gul'>
            <div className='Gulrose-card'>
                <img src="https://lafaet72.ru/upload/iblock/3ec/3ecc7e5842a838cd1b894345eb43fbb7.jpg" alt="" />
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
                <img src="https://flork.ru/wa-data/public/shop/products/28/29/2928/images/4177/4177.970.jpg" alt="" />
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
                <img src="https://germany.grand-flora.ru/1630-8397-large/solnechnaja-rosa.webp" alt="" />
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
                <img src="https://buketlove.ru/assets/images/products/375/1571700714-94792994.jpg" alt="" />
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

export default Gul
