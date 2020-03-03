import React from 'react';
import verical1 from "img/content_img1.jpg"
import verical2 from "img/content_img2.jpg"
import verical3 from "img/content_img3.jpg"
import verical4 from "img/content_img4.jpg"
import 'css/ver.css';

const Vericalcontent = () => {
    return (
        <div className="Verical">
            <h3>Best Game</h3>
            <div className="card_content">
                <div className="card_image">
                    <img src={verical1} />
                </div>
                <div className="card_meta">
                    <a href="#">SOUTH PARK FRANCHISE</a>
                </div>
            </div>
            <div className="card_content">
                <div className="card_image">
                    <img src={verical2} />
                </div>
                <div className="card_meta">
                    <a href="#">Buy Hunt: Showdown</a>
                </div>
            </div>
            <div className="card_content">
                <div className="card_image">
                    <img src={verical3} />
                </div>
                <div className="card_meta">
                    <a href="#">Buy Kingdom Under Fire 2 </a>
                </div>
            </div>
            <div className="card_content">
                <div className="card_image">
                    <img src={verical4} />
                </div>
                <div className="card_meta">
                    <a href="#">DYING LIGHT</a>
                </div>
            </div>
        </div>
    )
}
export default Vericalcontent;