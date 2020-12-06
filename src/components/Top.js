import React from 'react';
import {
    FaLinkedin,
    FaGithub
  } from "react-icons/fa";
import { useState } from "react";

function Top() {
    const [state] = useState({title:'I AM PAWNI KHANNA', text: 'engineer | web developer | devops',});
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header_section">
                                <div className="typewriter">
                                    <span class="typewriter-text">
                                        <h1> {state.title} </h1>
                                    </span>
                                </div>
                                <p> 
                                    {state.text}
                                </p>
                                <ul className="header_ul">
                                    <a href="https://www.linkedin.com/in/pawni-khanna-85326b168/">
                                    <li>
                                        <FaLinkedin
                                        size={28} color="white"
                                        />
                                    </li>
                                    </a>
                                    <a href="https://github.com/pawnikhanna">
                                    <li>
                                        <FaGithub
                                        size={28} color="white"
                                        />
                                    </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Top;
