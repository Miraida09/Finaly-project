import React from 'react'
import "./Chocolate.css"
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'


function Chocolate() {
    return (
        <div className=' Chocolate'>
            <div className='Gulrose-card'>
                <img src="https://flowerbox.md/images/virtuemart/product/photo_2024-04-10_00-32-42.jpg" alt="" />
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
                <img src="https://kenzan.kg/image/cache/catalog/IMG_2060-1000x1000.jpeg" alt="" />
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
                <img src="https://krasnogorsk.sladko62.ru/wp-content/uploads/2022/01/Buket-iz-klubniki-29.-Buket-miks-iz-klubniki-v-shokolade.jpg" alt="" />
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
                <img src="https://tambov.sedobnye-bukety.ru/wp-content/uploads/2023/05/Sedobnyj-buket-263.-Klubnika-v-shokolade-v-bukete.jpg" alt="" />
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

export default Chocolate
