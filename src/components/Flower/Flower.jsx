import React from 'react'
import Image8 from "../../assets/svg/08.svg"
import "./Flower.css"


function Flower() {
    return (
        <div className='Flower'>
            <div className='flower'>

                <div>
                    <img src={Image8} alt="" /> <br />
                </div>
                <div>
                    <img src={Image8} alt="" /> <br />

                </div>
                <div>
                    <img src={Image8} alt="" />

                </div>
                <div>
                    <img src={Image8} alt="" />



                </div>
            </div>
            <div className='shoop-img'>
                <img className='shoop-img' src={Image8} alt="" />

            </div>
        




        </div>
    )
}

export default Flower
