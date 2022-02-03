import React, {useState, useEffect} from "react";
import images from "../assets/images/index.js";
import {Goal} from "./Goal";

export function ContentInProgressNursery(props) {
    const numberOfCompletedTasks = props.numberOfCompletedTasks;
    const [plantImage, setPlantImage] = useState("");

    useEffect(() => {
        if (numberOfCompletedTasks > 5) {
            return setPlantImage(images.part6);
        } else if (numberOfCompletedTasks < 4) {
            return setPlantImage(images.part5);
        } else if (numberOfCompletedTasks < 3) {
            return setPlantImage(images.part4);
        } else if (numberOfCompletedTasks < 2) {
            return setPlantImage(images.part3);
        } else if (numberOfCompletedTasks < 1) {
            return setPlantImage(images.part2);
        } else if (numberOfCompletedTasks < 0) {
            return setPlantImage(images.part1);    
        } 
    }, [numberOfCompletedTasks]);



    // function plantImageSelector() {
    //     if (numberOfCompletedTasks > 5) {
    //         setPlantImage(images.part6);
    //     } else if (numberOfCompletedTasks > 4) {
    //         setPlantImage(images.part5);
    //     } else if (numberOfCompletedTasks > 3) {
    //         setPlantImage(images.part4);
    //     } else if (numberOfCompletedTasks > 2) {
    //         setPlantImage(images.part3);
    //     } else if (numberOfCompletedTasks > 1) {
    //         setPlantImage(images.part2);
    //     } else if (numberOfCompletedTasks > 0) {
    //         setPlantImage(images.part1);    
    //     } 
    // }  

    return (
        <div>
            {props.goalsData.map((goal) => {
                return <Goal goal={goal} key={goal.id}
                plantImage={plantImage}
                goalsData={props.goalsData} />
            })}
        </div>
    );
};
