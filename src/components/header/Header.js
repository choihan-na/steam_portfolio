import React from 'react';
import global_logo from 'img/header_logo.png';
import 'css/header.css';
const Header = () => {
    return (
        <header>
            <div className="global_header">
                <h1>
                    <a href="/">
                        <img src={global_logo} />
                    </a>
                </h1>
                <ul className="global_left">
                    <li><a href="#">STORE</a></li>
                    <li><a href="#">COMMUNITY</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SUPPORT</a></li>
                </ul>
                <ul className="global_right">
                    <li><a href="#">Install Steam</a></li>
                    <li><a href="#">로그인</a></li>
                    <li><a href="#">|</a></li>
                    <li><a href="#">언어</a></li>
                </ul>
            </div>
        </header >
    )
}
export default Header;
