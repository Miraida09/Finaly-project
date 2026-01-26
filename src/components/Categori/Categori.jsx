import React from 'react'
import "./Categori.css"
import { Link } from 'react-router-dom'



function Categori() {
    return (
        <div className="categori">
            <h4>Category</h4>

            <Link to="/rose"><p>Rose</p></Link>
            <Link to="/strawberries"><p>Chocolate-covered strawberries</p></Link>
            <Link to="/tulip"><p>Tulip</p></Link>
            <Link to="/lily"><p>Lily</p></Link>
            <Link to="/peony"><p>Peony</p></Link>
            <Link to="/violet"><p>Violet</p></Link>
            <Link to="/chamomlie"><p>Chamomlie</p></Link>


        </div>
    )
}



export default Categori

