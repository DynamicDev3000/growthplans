import React, {useState} from "react";
import Draggable from "react-draggable";
import {Goal} from "./Goal";
import images from "../assets/images/index.js";
import {ContentInProgressNursery} from "./ContentInProgressNursery";

export function ContentInspirationStation(props) {


    return (
    <div style = {{
        backgroundImage:  'url("https://www.picgifs.com/graphics/k/kawaii-scene/graphics-kawaii-scene-432830.gif")'
        }}>'
    <h1>Inspiration Station</h1>
    <h2>Here are some of the goals you have completed!</h2>
                <Draggable> 
                    <div>
                    <img src={images.part6} alt="part6"></img>
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                    <img src={images.part5} alt="part5"></img>
                    </div>
                </Draggable>
    </div>
    )
}

