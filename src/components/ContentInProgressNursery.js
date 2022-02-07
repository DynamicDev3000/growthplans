import React, { useState, useEffect } from "react";
import images from "../assets/images/index.js";
import { Goal } from "./Goal";

const countNumberOfCompletedTasks = (goal) => {
    let count = 0;
    for (let j = 0; j < goal.tasks.length; j++) {
        if (goal.tasks[j].is_complete === true) {
            count += 1;
        }
    }
    return count;
}

const selectImage = (numberOfCompletedTasks) => {
    if (numberOfCompletedTasks > 4) {
        return (images.part6);
    } else if (numberOfCompletedTasks === 4){
        return (images.part5);
    } else if (numberOfCompletedTasks === 3) {
        return (images.part4);
    } else if (numberOfCompletedTasks === 2 ){
        return (images.part3);
    } else if (numberOfCompletedTasks === 1) {
        return (images.part2);
    } else if (numberOfCompletedTasks === 0) {
        return (images.part1);
    }
}

export function ContentInProgressNursery(props) {
    const [goalCompleted, setGoalCompleted] = useState([]);
    const [goalInProgress, setGoalInProgress] = useState([]);
    
    const handleGoalCompleted = (goal) => {
        props.goalsData.map((goal) => {
        if (goal.is_goal_completed === true) {
            setGoalCompleted(goalCompleted.concat(goal));
        }
    });
    }
    const handleGoalInProgress = (goal) => {
        props.goalsData.map((goal) => {
        if (goal.is_goal_completed === false) {
            setGoalInProgress(goalInProgress.concat(goal));
        }
    });
    }

    useEffect(() => {
        handleGoalCompleted();
        handleGoalInProgress();
    }, [props.goalsData]);


    return (
        <div>
            {goalInProgress.map((goal) => {
                const total = countNumberOfCompletedTasks(goal);
                console.log(total);
                const plantImage = selectImage(total);
                return <Goal goal={goal} key={goal.id}
                    plantImage={plantImage}
                    goalsData={props.goalsData} />
            })}
        </div>
    );
};
