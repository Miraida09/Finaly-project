import React from 'react'
import "./Gulpeony.css"
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'


function Gulpeony() {
    return (
        <div className='Gulpeony'>
            <div className='Gulrose-card'>
                <img src="https://gorod-buketov.ru/wp-content/uploads/2017/03/i-2.jpeg" alt="" />
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
                <img src="https://gorod-buketov.ru/wp-content/uploads/2023/07/1684663006_69634084.jpg" alt="" />
                <div className='pr-card'>
                    <p>40%</p>
                </div>
                <Link to="/like"><FaRegHeart className='heart' /></Link>
                <div className='card-zx'>
                    <h1>Rosé Deluxe</h1>
                    <p>1000с</p>
                    <button>buy</button>
                </div>
            </div>  <div className='Gulrose-card'>
                <img src="https://gorod-buketov.ru/wp-content/uploads/2023/07/1685350115_4138970.jpg" alt="" />
                <div className='pr-card'>
                    <p>40%</p>
                </div>
                <Link to="/like"><FaRegHeart className='heart' /></Link>
                <div className='card-zx'>
                    <h1>Rosé Deluxe</h1>
                    <p>1000с</p>
                    <button>buy</button>
                </div>
            </div>  <div className='Gulrose-card'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVSXLbuxVzLYwhpAgYA1kW7erxHUFLLn7log&s" alt="" />
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

export default Gulpeony
