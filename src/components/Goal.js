import React, {useState, useEffect} from "react";
import images from "../assets/images/index.js";
import { GoalCompleteSubtasks } from "./GoalCompleteSubtasks.js";

export function Goal(props) {
    const goal = props.goal;
    const plantImage = props.plantImage;


//link task.is_complete to tallyUpNumberOfCompletedTasks
//for each goal in goalsData, tallyUpNumberOfCompletedTasks from
//goal.tasks.map((task)

    return (
        <>
        <div key={goal.id}>
        <ul>{goal.title}</ul>
        <img src={plantImage.path} alt={plantImage.alt}/>
        {goal.tasks.map((task) => {
            return (
                <li key={task.id}>{task.description}</li>
            )
    })}
        </div>
        </>
    );
}