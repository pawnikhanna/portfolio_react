import React from 'react';
import { useState } from "react";
import certi from './images/verify-removebg-preview.png'

function Certifications(){
    const [state] = useState({header: 'these are my', main_header: 'CERTIFICATIONS'})
    return (
        <section id="certifications">
            <div className="certifications">
                <div className="container">
                    <div className="common">
                        <h3 className="white_heading">{state.header}</h3>
                        <h1 className="white_main_header">{state.main_header}</h1>
                        <div className="white_common_border"></div>
                    </div>
                    <div className="row h-550 alignCenter">
                        <div className="col-6">
                            <div className="certi_image">
                                <img src={certi} alt="certi" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="certi_info">
                                <div className="certi_info-p">
                                    Applied Data Science with Python<br/>
                                    IBM<br/><br/>
                                    Full Stack Web Developement<br/>
                                    Eduonix <br/><br/>
                                    ML, Data Science and Deep Learning<br/>
                                    Udemy<br/><br/>
                                    Design and Analysis of Algorithm<br/>
                                    NPTEL<br/><br/>
                                    Career Skills<br/>
                                    TCS iON<br/><br/>
                                    Python Programming<br/>
                                    Udemy<br/><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certifications;
