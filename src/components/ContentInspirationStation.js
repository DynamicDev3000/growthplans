import React, {useState} from "react";
import Draggable from "react-draggable";
import {Goal} from "./Goal";
import images from "../assets/images/index.js";
import { countNumberOfCompletedTasks, selectImage } from "./ContentInProgressNursery";

export function ContentInspirationStation(props) {


    return (
    <div style = {{
        backgroundImage:  'url("https://www.picgifs.com/graphics/k/kawaii-scene/graphics-kawaii-scene-432830.gif")'
        }}>'
    <h1>Inspiration Station</h1>
    <h2>Here are some of the goals you have completed!</h2>
    {props.goalsData.map((goal) => {
                if (goal.is_goal_completed === true) {
                const total = countNumberOfCompletedTasks(goal);
                console.log(total);
                const plantImage = selectImage(total);
                return (
                <Draggable> 
                    <Goal goal={goal} key={goal.id}
                    plantImage={plantImage}
                    goalsData={props.goalsData} />
                </Draggable>
                )
            }
            })}
    </div>
    )
}
