import React from 'react';
import 'css/gnb.css';
const Gnb = () => {
    return (
        <nav className="store_nav">
            <ul className="gnb">
                <li>
                    <a href="#">
                        Your Store
                    </a>
                    <ul className="sub">
                        <li>
                            <a href="#">
                                store home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                recently viewed
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                steam curators
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                recently updated
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        Games
                    </a>
                    <ul className="sub">
                        <li>
                            <a href="#">
                                store home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                recently viewed
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                steam curators
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                recently updated
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        Software
                    </a>
                </li>
                <li>
                    <a href="#">
                        Hardware
                    </a>
                </li>
                <li>
                    <a href="#">
                        News
                    </a>
                </li>
            </ul>
            <input type="search" name="search" placeholder="search the store..." />
        </nav>
    )
};
export default Gnb;