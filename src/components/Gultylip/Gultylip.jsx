import React from 'react'
import "./Gultylip.css"
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Gultylip() {
    return (
        <div className=' Gultylip'>
            <div className='Gultylip-card'>
                <img src="https://rosesmarket.ru/upload/resize_cache/iblock/70f/580_580_0/mtuy36mu7oa1lew9ps2f0hu5uks38kn0.jpg" alt="" />
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
            <div className='Gultylip-card'>
                <img src="https://floristum.ru/uploads/products/632x632/4949/p152_1588582606_62474.jpg" alt="" />
                <div className='pr-card'>
                    <p>40%</p>
                </div>
                <Link to="/like"><FaRegHeart className='heart' /></Link>
                <div className='card-zx'>
                    <h1>Rosé Deluxe</h1>
                    <p>1000с</p>
                    <button>buy</button>
                </div>
            </div>  <div className='Gultylip-card'>
                <img src="https://i1.storeland.net/2/4998/149973658/afacdb/buket-iz-47-tyulpanov.jpg" alt="" />
                <div className='pr-card'>
                    <p>40%</p>
                </div>
                <Link to="/like"><FaRegHeart className='heart' /></Link>
                <div className='card-zx'>
                    <h1>Rosé Deluxe</h1>
                    <p>1000с</p>
                    <button>buy</button>
                </div>
            </div>  <div className='Gultylip-card'>
                <img src="https://i0.wp.com/fruit-flower.ru/wp-content/uploads/2022/03/1-2.jpg?fit=837%2C837&ssl=1" alt="" />
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

export default Gultylip
