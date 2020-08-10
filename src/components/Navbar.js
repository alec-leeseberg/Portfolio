import React from 'react';
import Toggle from './Toggle';
import HamburgerElement from './Hamburger';
import { NavLink } from 'react-router-dom';

//Navigation Bar
//Contains Toggle, Logo, Menu Links/Hamburger

const Navbar = () => (
    <div className="navbar">
        <Toggle className="toggle-container"></Toggle>
        <img src="/images/allogowhite.svg" className="navbarlogo"></img>
        <li className="menu-item-underline"><NavLink to="/contact" activeClassName="is-active" exact={true}>Contact</NavLink></li>
        <li className="menu-item-underline"><NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink></li>
        <li className="menu-item-underline"><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
        <HamburgerElement></HamburgerElement>
    </div>
);

export default Navbar;