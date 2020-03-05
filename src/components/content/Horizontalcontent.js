import React, { useState } from "react";
import hor1 from 'img/hor1.jpg';
import hor2 from 'img/hor2.jpg';
import hor3 from 'img/hor3.jpg';
import hor4 from 'img/hor4.jpg';
import hor5 from 'img/hor5.jpg';
import hor6 from 'img/hor6.jpg';
import hor7 from 'img/hor7.jpg';
import hor8 from 'img/hor8.jpg';
import hor9 from 'img/hor9.jpg';
import hor1_logo from 'img/hor1_logo.png';
import hor2_logo from 'img/hor2_logo.png';
import hor3_logo from 'img/hor3_logo.png';
import hor4_logo from 'img/hor4_logo.png';
import hor5_logo from 'img/hor5_logo.png';
import hor6_logo from 'img/hor6_logo.png';
import hor7_logo from 'img/hor7_logo.png';
import hor8_logo from 'img/hor8_logo.png';
import hor9_logo from 'img/hor9_logo.png';
import 'css/hor.css';

const Horizontalcontent = () => {
    const [hori, setHori] = useState([{
        id: 1,
        image: hor1,
        logo: hor1_logo,
        h4: "BEYOND TWO SOULS",
        won: "19,900won",
    },
    {
        id: 2,
        image: hor2,
        logo: hor2_logo,
        h4: "Control",
        won: "19,900won",
    },
    {
        id: 3,
        image: hor3,
        logo: hor3_logo,
        h4: "CYBERPUNK",
        won: "19,900won",
    },
    {
        id: 4,
        image: hor4,
        logo: hor4_logo,
        h4: "DARKSIDERS3",
        won: "19,900won",
    },
    {
        id: 5,
        image: hor5,
        logo: hor5_logo,
        h4: "METRO EXODUS",
        won: "19,900won",
    },
    {
        id: 6,
        image: hor6,
        logo: hor6_logo,
        h4: "HADES",
        won: "19,900won",
    },
    {
        id: 7,
        image: hor7,
        logo: hor7_logo,
        h4: "PHOENIX POINT",
        won: "19,900won",
    },
    {
        id: 8,
        image: hor8,
        logo: hor8_logo,
        h4: "HEAVY RAIN",
        won: "19,900won",
    },
    {
        id: 9,
        image: hor9,
        logo: hor9_logo,
        h4: "INNER SPACE",
        won: "19,900won",
    },
    ])
    return (
        <div className="horizontal">
            {hori.map(hor =>
                <div className="card_content">
                    <div className="card_image">
                        <img src={hor.image} />
                        <div className="game_logo">
                            <img src={hor.logo} />
                        </div>
                        <div class="game_txt">
                            <h4>{hor.h4}</h4>
                            <p class="won">{hor.won}</p>
                        </div>
                    </div>
                </div>
            )
            };

        </div>
    )
}
export default Horizontalcontent;