import React, {useState, useEffect} from "react";
import images from "../assets/images/index.js";
import { GoalCompleteSubtasks } from "./GoalCompleteSubtasks.js";
import "../App.css";
export function Goal(props) {
    const goal = props.goal;
    const plantImage = props.plantImage;


//link task.is_complete to tallyUpNumberOfCompletedTasks
//for each goal in goalsData, tallyUpNumberOfCompletedTasks from
//goal.tasks.map((task)

    return (
        <>
        <div key={goal.id}>
        <h3><ul>{goal.title}</ul></h3>
        <img src={plantImage.path} alt={plantImage.alt} className="pic"/>
        {goal.tasks.map((task) => {
            return (
                <li key={task.id}>{task.description}</li>
            )
    })}
        </div>
        </>
    );
}