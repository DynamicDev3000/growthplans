import React, {useState} from "react";
import images from "../assets/images/index.js";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "../App.css";
import axios from "axios";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import ShowerIcon from '@mui/icons-material/Shower';

export function Goal(props) {
    const goal = props.goal;
    const plantImage = props.plantImage;
    const currentPageName = props.currentPageName;


    const completeTodo = (task) => {
    axios
        .patch(`https://growthplans.herokuapp.com/goals/${goal.id}/${task.id}/mark_complete`)
        .then(res => {
            console.log(res.data);
            if (res.data.goal.is_goal_completed === true) {
                alert("Congratulations! You have completed your goal! 🎉 🥳  Go check your Garden! 💕");
            }
            props.refreshData();
        })
        };

    const removeTodo = (task) => {
    axios 
        .delete(`https://growthplans.herokuapp.com/goals/${goal.id}/${task.id}`)
        .then(res => {
            props.refreshData();
        })
        };

    const removeGoal = () => {
        if (window.confirm("Are you really sure you want to delete your whole plan(t)?  Have you tried phoning a friend? 🤔")) {
        axios
            .delete(`https://growthplans.herokuapp.com/goals/${goal.id}`)
            .then(res => {
                props.refreshData();
            })
        }
    }

    const editGoal = (goal) => {
        props.setCurrentPageName("Edit-Goal");
        props.setGoalToEdit(goal);
    }
    
    return (
        <>
        <div className="display-goal" key={goal.id}>
        <img src={plantImage.path} alt={plantImage.alt} className="pic"/>
        <h3><ul>{goal.title}</ul></h3>
        <h5><ul>Motivator: {goal.why}</ul></h5>
        <h5><ul>Days left to complete: {goal.due_date}</ul></h5>
        {goal.tasks.map((task) => {
        return(  
            <div key = {task.id}
            className="todo"
            style={{ textDecoration: task.is_complete ? "line-through" : "" }}
        >       
                <li key={task.id}> {task.description}</li>
                <div >
        <Button
        variant="outlined"
        color="success"
        startIcon={<ShowerIcon />}
        onClick={() => props.setCurrentPageName("Watering-Station")}
        >Water
        </Button>
        <div className="divider2"/>
        <Button
        onClick={() => completeTodo(task)}
        variant="outlined"
        color="success"
        startIcon={<CheckCircleOutlineIcon />}>Done
        </Button>
        <div className="divider2"/>

        <Button
        variant="outlined"
        color="success"
        onClick={() => removeTodo(task)}
        startIcon={<ClearIcon />}>Remove
        </Button>
        </div>
        </div>
        )
        })}
        <br></br>
        <Button
        variant="outlined"
        type="edit"
        color="primary"
        onClick={() => editGoal(goal)}
        startIcon={<EditIcon />}>
        Edit Plan(t)
        </Button>
        <div className="divider"/>
        <Button 
        variant="outlined" 
        type="submit"
        color="secondary"
        onClick={() => removeGoal(goal.id)}
        startIcon={<DeleteIcon />}>
        Delete Plan(t)
        </Button>
        <br></br>
        </div>
        </>
    );
}