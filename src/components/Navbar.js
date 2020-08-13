import React, { Component } from 'react';
import Toggle from './Toggle';
import HamburgerElement from './Hamburger';
import { NavLink } from 'react-router-dom';

//Navigation Bar
//Contains Toggle, Logo, Menu Links/Hamburger
class Navbar extends React.Component {
    render() {

        const { theme, hamburgeractive, handleToggleTheme, handleToggleHamburger } = this.props;
        return (
            <div className={theme == "Dark" ? "navbar" : "navbar-light"}>
                <Toggle className="toggle-container" theme={theme} handleToggleTheme={handleToggleTheme}></Toggle>
                <img src={theme == "Dark" ? "/images/allogowhite.svg" : "/images/allogosolidblack.svg"} className={theme == "Dark" ? "navbarlogo" : "navbarlogowhite"}></img>
                <li className={theme == "Dark"? "menu-item-underline" : "menu-item-underline-light"}><NavLink to="/contact" activeClassName="is-active" exact={true}>Contact</NavLink></li>
                <li className={theme == "Dark"? "menu-item-underline" : "menu-item-underline-light"}><NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink></li>
                <li className={theme == "Dark"? "menu-item-underline" : "menu-item-underline-light"}><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
                <HamburgerElement hamburgeractive={hamburgeractive} handleToggleHamburger={handleToggleHamburger}></HamburgerElement>
            </div>
        );
    }
}
export default Navbar;


/*
const Navbar = ({ theme }) => (
    <div className="navbar">
        <Toggle className="toggle-container"></Toggle>
        <img src="/images/allogowhite.svg" className="navbarlogo"></img>
        <p>{theme}</p>
        <li className="menu-item-underline"><NavLink to="/contact" activeClassName="is-active" exact={true}>Contact</NavLink></li>
        <li className="menu-item-underline"><NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink></li>
        <li className="menu-item-underline"><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
        <HamburgerElement></HamburgerElement>
    </div>
);

export default Navbar;
*/