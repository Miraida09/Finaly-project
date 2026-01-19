import React from 'react'
import Image8 from "../../assets/svg/08.svg"
import "./Flower.css"

function Flower({ onSelectImage, selectedImage }) {
    const thumbnails = [Image8, Image8, Image8, Image8];
    const defaultImage = Image8;
    const currentImage = selectedImage || defaultImage;

    return (
        <div className='product-thumbnails-list'>
            {thumbnails.map((thumb, index) => (
                <button
                    key={index}
                    className={`thumbnail-item ${currentImage === thumb ? 'active' : ''}`}
                    onClick={() => onSelectImage && onSelectImage(thumb)}
                    aria-label={`View image ${index + 1}`}
                >
                    <img src={thumb} alt={`Thumbnail ${index + 1}`} />
                </button>
            ))}
        </div>
    )
}

export default Flower
