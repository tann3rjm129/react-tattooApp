import React from 'react';
import './Navbar.css';
// import Search from '../Search';

function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <ul className='logo-container'>
                <li>
                    <a className="Navbar-logo" href="/">
                        <img src={require("../../Assets/images/ThinkInkLogo.png")} alt=""></img>
                    </a>
                </li>
            </ul>
            <ul className='nav-container'>
                <li>
                    <a className="nav-link justify-content-end" href="/post">Start a Project</a>
                </li>

                <li>
                    <a className="nav-link justify-content-end" href="/account/signup">Log In</a>
                </li>


            </ul>
        </nav >
    )

}

export default Navbar;
