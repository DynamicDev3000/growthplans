import React from "react";
import images from "../assets/images/index.js";

export function Banner() {

return (
    <header>
        <img className="banner" src={images.roses.path} alt={images.roses.alt} />
    <h2>Welcome to your Growth Plan(t)s Garden!</h2>
    </header>
)
}