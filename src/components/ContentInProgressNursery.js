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

    return (
        <div>
            {props.goalsData.map((goal) => {
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
