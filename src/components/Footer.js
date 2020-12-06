import React from 'react';
import profile from './images/profile.png';
import {
    FaLinkedin,
    FaGithub
  } from "react-icons/fa";
import { useState } from "react";

function Footer() {
    const [state] = useState({header:'hi', main_header: 'I AM PAWNI KHANNA', text: 'let\'s get connected!!', sub_text:'pawnikhanna12@gmail.com',})
    return (
        <div className="footer">
            <div className="container">
                <div className="footerSection">
                    <div className="common">
                        <div className="footer_img">
                            <img src={profile} alt="" />
                        </div>
                        <h3 className="white_heading">{state.header}</h3>
                        <h1 className="white_main_header">{state.main_header}</h1>
                        <p className="white_main_content">{state.text}</p>
                        <div className="white_common_border"></div>
                        <p className="sub_text">{state.sub_text}</p>
                        <ul className="footer_links">
                            <li><a href="https://www.linkedin.com/in/pawni-khanna-85326b168/"><FaLinkedin size={40}/></a></li>
                            <li><a href="https://github.com/pawnikhanna"><FaGithub size={40}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
