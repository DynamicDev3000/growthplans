import React, {useState, useEffect} from "react";
import goalsData from "../assets/goalsData";
import images from "../assets/images/index.js";
import axios from 'axios';

export function ContentInProgressNursery() {

    return (
        <div className="container">
            In-Progress Nursery
        </div>
    )
}

// function DisplayPlantState () {
//     const [plantData, setPlantData] = useState(plantData);
//     // set plantData for each plantData.id in plantData, total up plantData.Data.Tasks.is_complete === true
// //add listener for onclick finished tasks 

// useEffect(() => {
//     axios
//     .get('https://growthplans.herokuapp.com/goals')
//     .then((response) => {
//     const numberOfCompletedTasks = response.data.tasks.map((task) => {
//         if (task.is_complete === true) {
//             numberOfCompletedTasks += 1;
//             }
//             return numberOfCompletedTasks;
//         })
    
//     useEffect(() => {
//         if (numberOfCompletedTasks > 5) {
//             setPlantData(<img src = {images.part6} alt="full blooms" />);
//         } else if (numberOfCompletedTasks > 4) {
//             setPlantData(<img src = {images.part5} alt="blooming" />);
//         } else if (numberOfCompletedTasks > 3) {
//             setPlantData(<img src = {images.part4} alt="full grown plant"/>);
//         } else if (numberOfCompletedTasks > 2) {
//             setPlantData(<img src = {images.part3} alt="baby plant growing bigger"/>);
//         } else if (numberOfCompletedTasks > 1) {
//             setPlantData(<img src = {images.part2} alt="little sprout emerging"/>);
//         } else if (numberOfCompletedTasks > 0) {
//             setPlantData(<img src = {images.part1} alt="a pot ready to grow!" /> );    
//         }    
//             });
//         }, []);

// function DisplayGoalsTasks () {
//     const [goals, setGoals] = useState(goalsData);
//     const [tasks, setTasks] = useState(tasksData);
//     const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);
//     const [numberOfTotalTasks, setNumberOfTotalTasks] = useState(0);
//     const [goalIsComplete, setGoalIsComplete] = useState(goal.is_complete);
//     const [taskIsComplete, setTaskIsComplete] = useState(task.is_complete);
//     const [goalIsComplete, setGoalIsComplete] = useState(goal.is_complete);
//     const [taskIsComplete, setTaskIsComplete] = useState(task.is_complete);
//     const [goalIsComplete, setGoalIsComplete] = useState(goal.is_complete);
// }
//     const goalLists = response.data.goal.map((goal) => 
//         <li key={goal.id}>
//             <h3>{goal.title}</h3>
//             <p>{goal.tasks}</p>
//         </li>
//     ); 

//     return (
//         <div>
//             <ul>{goalList}</ul>
//             <div>{plantData}</div>
//         </div>  

//     return (
//     <div className="ContentInProgressNursery">
//     <DisplayPlantState goalsData={goalsData} />
//     <DisplayGoalsTasks goalsData={goalsData} />
//     </div>
//     )
