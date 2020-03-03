import React from 'react';
import 'css/slider.css';
// import 변수명 from "경로" ;
import slider1 from "img/Slider1.jpg"
import slider1_1 from "img/Slider1_1.jpg";
import slider1_2 from "img/Slider1_2.jpg";
import slider1_3 from "img/Slider1_3.jpg";
import slider1_4 from "img/Slider1_4.jpg";

const Slider = () => {
    return (
        <div className="SliderWrap">
            <div className="slider">
                <div className="view">
                    <img src={slider1} alt="Slider1" />
                </div>
                <div className="thumb">
                    <h2>MONSTER HUNTER</h2>
                    <div className="thumbnail">
                        <img src={slider1_1} alt="Slider1_1" />
                        <img src={slider1_2} alt="Slider1_2" />
                        <img src={slider1_3} alt="Slider1_3" />
                        <img src={slider1_4} alt="Slider1_4" />
                    </div>
                    <div className="thumTxt">
                        <p>판매중</p>
                        <p>34,900원</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Slider;