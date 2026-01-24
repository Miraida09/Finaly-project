import React from 'react'
import "./Last.css"

function Last() {
    return (
        <div>
            <div className='Last'>
                <div className='mail'>
                    <div>
                        <label htmlFor="">First name *</label> <br />
                        <input type="" placeholder='Maria' />
                    </div>
                    <div>
                        <label htmlFor="">Last name </label> <br />
                        <input type="text" />

                    </div>
                    <div>
                        <label htmlFor="">Phone *</label> <br />
                        <input type="text" placeholder='+44 8749790988' />

                    </div>
                    <div>
                        <label htmlFor="">E-mail *</label> <br />
                        <input type="text" placeholder='Vitathemes@gmail.com' />

                    </div>
                    <button>CONTINUE</button>

                </div>


            </div>
        </div>
    )
}

export default Last
