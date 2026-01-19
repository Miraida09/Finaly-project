import React from 'react'
import "./Delivery.css"
import { PiTruck } from "react-icons/pi";
import { BsBox2Heart } from "react-icons/bs";
import { SlPresent } from "react-icons/sl";
import { LuChefHat } from "react-icons/lu";


function Delivery() {
    return (
        <div className='delivery'>

            <div className='box-1'>
                <PiTruck className='car-icons' />

                <h4 className='delivery-text'>Next day delivery <br />
                    /7 days a week
                </h4>
            </div>

            <div className='box-2'>
                <BsBox2Heart className='car-icons-2' />

                <h4 className='delivery-text'>
                    Handcrafted chocolate <br />
                    strawberries & bouquets
                </h4>
            </div>

            <div className='box-3'>
                <SlPresent className='car-icons-3' />

                <h4 className='delivery-text'>Free delivery <br />
                    over $199</h4>
            </div>

            <div className='box-4   '>
                <LuChefHat className='car-icons-4' />

                <h4 className='delivery-text'>
                    2 in 1 gourmet <br />
                    arrangements
                </h4>
            </div>

        </div>
    )
}

export default Delivery
