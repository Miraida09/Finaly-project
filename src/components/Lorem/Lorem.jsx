import React, { useState } from 'react'
import './Lorem.css'

function Lorem() {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <div className='product-tabs'>
            <div className='tabs-header'>
                <button
                    className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </button>
                <button
                    className={`tab-button ${activeTab === 'additional' ? 'active' : ''}`}
                    onClick={() => setActiveTab('additional')}
                >
                    Additional Information
                </button>
            </div>

            <div className='tabs-content'>
                {activeTab === 'description' && (
                    <div className='tab-panel'>
                        <h2>Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, 
                            augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit 
                            ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. 
                            Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.
                        </p>
                    </div>
                )}

                {activeTab === 'additional' && (
                    <div className='tab-panel'>
                        <h2>Additional Information</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, 
                            augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit 
                            ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. 
                            Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Lorem
