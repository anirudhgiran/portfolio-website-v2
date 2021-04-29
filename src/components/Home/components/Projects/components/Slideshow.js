import React from "react";

import "./Slideshow.scss";

const Slideshow = () => {
    return (
        <div className="slideshow-container">
            <div className="slides">
                <div className="slide">
                    <img
                        src={require("../../../../../assets/images/leica.PNG")}
                        alt=""
                    />
                </div>
                <div className="slide">
                    <img
                        src={require("../../../../../assets/images/cart.PNG")}
                        alt=""
                    />
                </div>
                <div className="slide">
                    <img
                        src={require("../../../../../assets/images/warisvirsede.PNG")}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
