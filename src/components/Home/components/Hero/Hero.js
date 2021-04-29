import React from "react";
import Typewriter from "./components/Typewriter";

import "./Hero.scss";

const Hero = () => {
    return (
        <section className="hero">
            <p>Hi! I am Anirudh Giran,</p>
            <div className="typewriter">
                <h1 className="placeholder">A Passionate Photographer</h1>
                <Typewriter />
            </div>
            <p>Welcome to my artboard</p>
            <p>👇👇👇</p>
            <p>scoll down</p>
        </section>
    );
};

export default Hero;
