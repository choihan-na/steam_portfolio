import React, { useState } from "react";
import verical1 from "img/content_img1.jpg"
import verical2 from "img/content_img2.jpg"
import verical3 from "img/content_img3.jpg"
import verical4 from "img/content_img4.jpg"
import 'css/ver.css';

const Vericalcontent = () => {
    const [vers, setVers] = useState([{
        id: 1,
        image: verical1,
        text: "SOUTH PARK FRANCHISE"
    },
    {
        id: 2,
        image: verical2,
        text: "Buy Hunt: Showdown"
    },
    {
        id: 3,
        image: verical3,
        text: "Buy Kingdom Under Fire 2"
    },
    {
        id: 4,
        image: verical4,
        text: "DYING LIGHT"
    }
    ])
    return (
        <div className="Verical">
            <h3>Best Game</h3>
            {vers.map(ver =>
                <div className="card_content">
                    <div className="card_image">
                        <img src={ver.image} />
                    </div>
                    <div className="card_meta">
                        <a href="#">{ver.text}</a>
                    </div>
                </div>
            )
            };
        </div >
    )
}
export default Vericalcontent;