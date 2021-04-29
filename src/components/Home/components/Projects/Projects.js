import React from "react";
import Slideshow from "./components/Slideshow";

import "./Projects.scss";

const Projects = () => {
    return (
        <section className={"projects"}>
            <h1 className={"heading"}>Projects</h1>
            <Slideshow />
        </section>
    );
};

export default Projects;
