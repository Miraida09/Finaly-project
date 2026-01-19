import React from 'react'
import "./Foto.css"
import image20 from "../../assets/svg/20.svg"
import image21 from "../../assets/svg/21.svg"
import image22 from "../../assets/svg/22.svg"
import image23 from "../../assets/svg/23.svg"
import image24 from "../../assets/svg/24.svg"




function Foto() {
    return (
        <>

            <div className='gridimage'>
                <div className='image2'>
                    <img src={image20} alt="" />

                </div>
                <div className='image1'>
                    <img className='Foto' src={image21} alt="" />

                </div>
                <div className='image1'>
                    <img className='Foto' src={image22} alt="" />

                </div>
                <div className='image1'>
                    <img className='Foto' src={image23} alt="" />

                </div>
                <div className='image1'>
                    <img className='Foto' src={image24} alt="" />

                </div>
            </div>  <br /> <br /><br />

        </>
    )
}

export default Foto
