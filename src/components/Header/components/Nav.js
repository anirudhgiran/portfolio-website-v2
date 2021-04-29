import React from "react";

import "./Nav.scss";

import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="navlink-active" exact>
                Home
            </NavLink>
            <NavLink to="/projects" activeClassName="navlink-active" exact>
                Projects
            </NavLink>
            <NavLink to="/contact" activeClassName="navlink-active" exact>
                Contact
            </NavLink>
        </nav>
    );
};

export default Nav;
