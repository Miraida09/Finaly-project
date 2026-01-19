import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image7 from "../../assets/svg/07.svg"
import image9 from "../../assets/svg/09.svg"
import image10 from "../../assets/svg/10.svg"
import "./Banner.css"

function Banner() {
    return (
        <div className='banner'>
            <Carousel>
                <Carousel.Item>
                    <img src={image7} alt="" />
                    <Carousel.Caption>
                        <div className='Cation'>
                            <h1 className='for'>gourmet gifts</h1>
                            <h3 className='far'>for any occasion </h3>
                            <button className='button-cation'>SHOP</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image9} alt="" />
                    <Carousel.Caption>
                        <div className="Cation">
                            <h1 className='for'>Chocolate Strawberries Boxes</h1>
                            <p className='far'>Freshly Made Every Morning</p>
                            <button className='button-cation'>SHOP</button>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image10} alt="" />
                    <div></div>
                    <Carousel.Caption>
                        <div className='Cation'>
                            <h1 className='for'>Roses & Chocolate</h1>
                            <h3 className='far'>Strawberries Arrangements</h3>
                            <p>
                                Handcrafted&Fresh Edible Bouquets
                            </p>
                            <button className='button-cation'>SHOP</button>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner
