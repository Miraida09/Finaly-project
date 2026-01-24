import React from 'react'
import "./Gulrose.css"
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Gulrose() {
    return (
        <div className='Gulrose'>
            <div className='Gulrose-card'>
                <img src="https://kopejsk.sladko62.ru/wp-content/uploads/2022/05/Buket-iz-klubni-74.-Buket-klubnika-s-rozami-16.jpg" alt="" />
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL3oubDocNl_l4mw87woinTYcEtqOYWq20g&s" alt="" />
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFA53O2Q2pNPbTa5_KZlxEveyG7SW8qfWBg&s" alt="" />
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkITEdbhkK1QSk6RioEoUCAhWfluKUZ7BDA&s" alt="" />
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

export default Gulrose
