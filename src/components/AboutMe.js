import React from 'react';
import {FaBookReader, FaWpforms, FaUserTie} from "react-icons/fa";
import { useState } from "react";

function AboutMe(){
    const [header] = useState({header:'know more', main_header: 'ABOUT ME', text: 'education, projects, internships',});
    return(
        <section id="about">
            <div className="aboutMe">
                <div className="container">
                    <div className="aboutMe_header">
                        <div className="common">
                            <h3 className="black_heading">{header.header}</h3>
                            <h1 className="black_main_header">{header.main_header}</h1>
                            <p className="black_main_content">{header.text}</p>
                            <div className="black_common_border"></div>
                        </div>

                        <div className="row bgMain">
                            <div className="col-4 bgMain">
                                <div className="aboutMe_box">
                                    <FaBookReader className="common_icons"/>
                                        <div className="aboutMe_box-header">
                                            EDUCATION
                                        </div>
                                        <div className="aboutMe_box-p">
                                            B.Tech (84%)<br></br>
                                            KIET Group of Institutions<br></br>
                                            Information Technology<br></br><br></br><br></br>
                                            Intermediate (86%)<br></br>
                                            St. Mary Senior Secondary School<br></br><br></br><br></br>
                                            High School (91.5%)<br></br>
                                            St. Mary Senior Secondary School<br></br><br></br><br></br>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="aboutMe_box">
                                    <FaWpforms className="common_icons"/>
                                        <div className="aboutMe_box-header">
                                            PROJECTS
                                        </div>
                                        <div className="aboutMe_box-p">
                                            Ecommerce API using Node.js<br></br><br></br>
                                            Hope(Adoption Website)<br></br>
                                            CI/CD using Docker, Jenkins and kubernetes<br></br><br></br>
                                            JavaScript Based Games :<br></br>
                                            <ul>
                                                <li>Grab the coins</li>
                                                <li>Brick Break</li><br></br>
                                            </ul>
                                            Mask Detection using supervise.ly<br></br><br></br>
                                            E-learning API using Node.js<br></br><br></br>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="aboutMe_box">
                                    <FaUserTie className="common_icons"/>
                                        <div className="aboutMe_box-header">
                                            TRAININGS & INTERNSHIPS
                                        </div>
                                        <div className="aboutMe_box-p">
                                            MLOps Intern<br></br>
                                            LinuxWorld Informatics<br></br><br></br><br></br>
                                            Data Analyst Intern<br></br>
                                            Yantra Byte<br></br><br></br><br></br>
                                            DevOps Assembly Line Training<br></br>
                                            LinuxWorld Informatics<br></br><br></br><br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;