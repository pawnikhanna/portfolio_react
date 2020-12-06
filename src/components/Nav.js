import React from 'react';
import grad from './images/graduation-cap-256.png';

function Nav() {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav_container">
                    <ul className="nav_left">
                        <div className="nav_left_logo">
                            <img src={grad} alt="logo"/>
                        </div>
                    </ul>
                    {state ? (
                        <ul className="nav_right">
                        <li><a href="" className="nav-link current">Home</a></li>
                        <li><a href="#about" className="nav-link">About Me</a></li>
                        <li><a href="#certifications" className="nav-link">Certifications</a></li>
                        <li><a href="#achievements" className="nav-link">Achievements</a></li>
                    </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>

            </div>
        </nav>
    )
}

export default Nav;
