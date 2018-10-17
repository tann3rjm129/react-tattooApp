import React from 'react';
import './Navbar.css';
import Search from '../Search';
// import NewProject from '../NewProject/NewProject';

function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <ul className='logo-container'>
                <li>
                    <a className="Devlogo" href="/">
                        <img src={require("../../Assets/logo-02.png")} alt=""></img>
                        DevHub </a>
                </li>
            </ul>
            <ul className='nav-container'>
                <li>
                    <a className="nav-link justify-content-end" href="/post">Start a Project</a>
                </li>

                <li>
                    <a className="nav-link justify-content-end" href="/account/signup">Log In</a>
                </li>
                <li className="search">
                    <Search />
                </li>

            </ul>
        </nav >
    )

}

export default Navbar;
