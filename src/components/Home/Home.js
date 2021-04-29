import React from "react";

import "./Home.scss";

//Components Imports
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

const Home = () => {
    return (
        <main className="home">
            <Hero />
            <Projects />
        </main>
    );
};

export default Home;
