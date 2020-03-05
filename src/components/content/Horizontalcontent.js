import React from 'react';
import hor1 from 'img/hor1.jpg';
import hor2 from 'img/hor2.jpg';
import hor3 from 'img/hor3.jpg';

import hor1_logo from 'img/hor1_logo.png';
import hor2_logo from 'img/hor2_logo.png';
import hor3_logo from 'img/hor3_logo.png';
import 'css/hor.css';

const Horizontalcontent = () => {
    return (
        <div className="horizontal">
            <div className="card_content">
                <div className="card_image">
                    <img src={hor1} />
                    <div className="game_logo">
                        <img src={hor1_logo} />
                    </div>
                    <div class="game_txt">
                        <h4>BEYOND TWO SOULS</h4>
                        <p class="won">\19,900</p>
                    </div>
                </div>
            </div>
            <div className="card_content">
                <div className="card_image">
                    <img src={hor2} />
                    <div className="game_logo">
                        <img src={hor2_logo} />
                    </div>
                    <div class="game_txt">
                        <h4>Control</h4>
                        <p class="won">\19,900</p>
                    </div>
                </div>
            </div>
            <div className="card_content">
                <div className="card_image">
                    <img src={hor3} />
                    <div className="game_logo">
                        <img src={hor3_logo} />
                    </div>
                    <div class="game_txt">
                        <h4>CYBERPUNK</h4>
                        <p class="won">\19,900</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Horizontalcontent;