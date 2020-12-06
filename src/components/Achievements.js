import React from 'react';
import { FaAward } from "react-icons/fa";
import { useState } from "react";

function Achievements() {
    const [header] = useState({header: 'these are my', main_header: 'ACHIEVEMENTS'})
    return (
        <section id="achievements">
            <div className="achievements">
                <div className="container">
                    <div className="common">
                        <FaAward size={50} color="rgb(27, 56, 136)"/>
                        <h3 className="black_heading">{header.header}</h3>
                        <h1 className="black_main_header">{header.main_header}</h1>
                        <div className="black_common_border"></div>
                    </div>
                    <div className="achievement_row">
                        <div className="achievement_col">
                            <div className="achievement">
                                <ul>
                                    <li>Academic Achiever<br/>
                                    KIET Group of Institutions</li>
                                    <li>Salesforce Administrator(6 Superbadges)</li>
                                    <li>Literary Fest(1st runner up)<br/>
                                        KIET Group of Institutions</li>
                                    <li>EF SET English Test(C2 grade)</li>
                                    <li>CEPT English Test(B2 grade)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
