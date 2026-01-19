import React from 'react'
import "./Foto.css"
import image20 from "../../assets/svg/20.svg"
import image21 from "../../assets/svg/21.svg"
import image22 from "../../assets/svg/22.svg"
import image23 from "../../assets/svg/23.svg"
import image24 from "../../assets/svg/24.svg"

function Foto() {
    return (
        <section className='instagram__ container'>
            <div className='instagram__grid'>
                
                <div className='instagram__large'>
                    <img src={image20} alt="Instagram post" />
                </div>
                
                <div className='instagram__small-grid'>
                    <div className='instagram__small'>
                        <img src={image21} alt="Instagram post" />
                    </div>
                    <div className='instagram__small'>
                        <img src={image22} alt="Instagram post" />
                    </div>
                    <div className='instagram__small'>
                        <img src={image23} alt="Instagram post" />
                    </div>
                    <div className='instagram__small'>
                        <img src={image24} alt="Instagram post" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Foto
