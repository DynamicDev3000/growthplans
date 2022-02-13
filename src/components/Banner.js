import React from "react";
import images from "../assets/images/index.js";

export function Banner() {

return (
    <header>
        <img className="banner" src={images.roses.path} alt={images.roses.alt} />
    <h2 className="welcome">Welcome to your</h2>
    <h2 className="welcome">Growth Plans Garden!</h2>
    </header>
)
}