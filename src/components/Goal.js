import React, {useState, useEffect} from "react";
import images from "../assets/images/index.js";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import "../App.css";
import axios from "axios";

export function Goal(props) {
    const goal = props.goal;
    const plantImage = props.plantImage;

    const [goalsData, setGoalsData] = useState([]);

    const [todos, setTodos] = useState(goal.tasks);

    const completeTodo = taskId => {
    // const newTodos = [...todos];
    // newTodos[index].is_complete = true;
    // setTodos(newTodos);
    axios
        .patch(`https://growthplans.herokuapp.com/goals/${goal.id}/${taskId.id}/mark_complete`)
        .then(res => {
            console.log(res);
        })
    };

    const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    axios 
        .delete(`https://growthplans.herokuapp.com/goals/${goal.id}/${newTodos[index].id}`)
        .then(res => {
            console.log(res);
        }
    )};

//trigger the useEffect function to re-render the page
    const removeGoal = () => {
        if (window.confirm("Are you really sure you want to delete your whole plan(t)?")) {
        axios
            .delete(`https://growthplans.herokuapp.com/goals/${goal.id}`)
            .then(res => {
                console.log(res);
            })
    }
    };

    return (
        <>
        <div key={goal.id}>
        <h3><ul>{goal.title}</ul></h3>
        <img src={plantImage.path} alt={plantImage.alt} className="pic"/>

        {goal.tasks.map((task) => {
        return(  
            <div key = {task.id}
            className="todo"
            style={{ textDecoration: task.is_complete ? "line-through" : "" }}
          >       
                <li key={task.id}>{task.description}</li>
                <div>
        <button onClick={(event) => completeTodo(event, task.id)}>Complete</button>
        <button onClick={(event) => removeTodo(event, task.id)}>x</button>
      </div>
        </div>
        )
        })}
        </div>
        <Button 
        variant="outlined" 
        type="submit"
        onClick={() => removeGoal(goal.id)}
        startIcon={<DeleteIcon />}>
        Delete Plan(t)
        </Button>

        </>
    );
}