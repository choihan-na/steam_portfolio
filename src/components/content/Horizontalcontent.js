import React from 'react';
import hor1 from 'img/hor1.jpg';
import hor2 from 'img/hor2.jpg';
import hor3 from 'img/hor3.jpg';
import 'css/hor.css';

const Horizontalcontent = () => {
    return (
        <div className="horizontal">
            <div className="card_content">
                <div className="card_image">
                    <img src={hor1} />
                    <div className="game_logo"></div>
                </div>
            </div>
            <div className="card_content">
                <div className="card_image">
                    <img src={hor2} />
                    <div className="game_logo"></div>
                </div>
            </div>
            <div className="card_content">
                <div className="card_image">
                    <img src={hor3} />
                    <div className="game_logo"></div>
                </div>
            </div>
        </div>
    )
}
export default Horizontalcontent;