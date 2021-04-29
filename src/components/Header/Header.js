import React from "react";

//Style Imports
import "./Header.scss";

//React Router DOM Import
import { Link } from "react-router-dom";
import Nav from "./components/Nav";

//Components Import

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <Link to="/" className="logo-heading">
                        Anirudh Giran
                    </Link>
                </div>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
