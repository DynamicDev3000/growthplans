import React, {useState} from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import HoverRating from "./GoalDifficultyScale";
import images from "../assets/images/index.js";
import axios from 'axios';
import App from "../App";

//need to build handle submit and axios post request
export function SetGoalForm(props) {
    // const makeEmptyGoal = () => {
    //     return {
    //         title: "",
    //         due_date: "",
    //         why: "",
    //         difficulty: "",
    //         subtasks: [],
    //     };
    // };
    const [goalFields, setGoalFormFields] = useState({
        title: "",
        due_date: "",
        why: "",
        difficulty: "",
    });

    const [inputFields, setInputFields]  = useState([
            {taskDescription: ''},
            ]);
    
    const handleSubmitNewGoal = (submitEvent, props) => {
        submitEvent.preventDefault();

        const newGoal = {
            title: goalFields.title,
            due_date: goalFields.due_date,
            why: goalFields.why,
            difficulty: goalFields.difficulty,
            tasks: inputFields
        };

        props.addNewGoal(newGoal);

        setGoalFormFields({
            title: "",
            due_date: "",
            why: "",
            difficulty: "",
        })
        setInputFields({
            taskDescription: ""
        });
    };
                
    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
        }

    const handleAddFields = () => {
        setInputFields([...inputFields, {taskDescription: ''}])
    }   
        
    const handleRemoveFields = id => {
            const values  = [...inputFields];
            values.splice(values.findIndex(value => value.id === id), 1);
            setInputFields(values);
    }

    const useStyles = makeStyles((theme) => ({
            root: {
                '& .MuiTextField-root': {
                margin: theme.spacing(1),
                },
                },
            button: {
                margin: theme.spacing(1),
            }
            }))
        
    const classes = useStyles();

    return (
        <Container>
        <form className={classes.root} onSubmit={handleSubmitNewGoal}>
        <h2>Let's get started by setting your plan(t) goals!</h2>
        <br></br>
            <TextField
                name="title"
                label="Enter a goal title"
                value={goalFields.title}
                onChange={(event) => setGoalFormFields({...goalFields, title: event.target.value})}
                variant="outlined"
                fullWidth
            />
        <br></br>
        <label>Deadline</label>
        <br></br>
            <input type="date" name="deadline" placeholder="Enter a deadline" 
            onChange={(event) => setGoalFormFields({...goalFields, due_date: event.target.value})}
            />
        <br></br>
        <br></br>
        <label>Difficulty </label>
        <br></br>
        <HoverRating
            name="difficulty"
            value={goalFields.difficulty}
            onChange={(event) => setGoalFormFields({...goalFields, difficulty: event.target.value})}
        />
        <br></br>
        <br></br>
        <label>Goal Description - why do you want to accomplish this?</label>
            <TextField
                name = "why"
                label="Enter a goal description"
                value={goalFields.why}
                onChange={(event) => setGoalFormFields({...goalFields, why: event.target.value})}
                variant="outlined"
                fullWidth
            />
        <br></br>
        <br></br>
        <label>Subtasks</label>
        <br></br>
        <h3>Add Subtasks</h3>
            {inputFields.map((inputField, index) => (
                <div key={index}>
                <TextField
                    name="taskDescription"
                    label="Task Description"
                    value={inputField.taskDescription}
                    variant="outlined"
                    onChange={event => handleChangeInput(index, event)}
                    />
                <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                <RemoveIcon />
                </IconButton>
                <IconButton
                onClick={handleAddFields}
                >
                <AddIcon />
                </IconButton>
                </div>
            ))}
        <br></br>
        <h3>Here is what your plant can look like as you complete your tasks!</h3>
        <img src={images.gif.path} alt={images.gif.alt} />
        <br></br>
        <Button
        className={classes.button}
        variant="contained" 
        color="primary" 
        type="submit" 
        endIcon={<Icon>send</Icon>}
        onClick={handleSubmitNewGoal}
        >Send to Nursery</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
        </Button>
        </form>
        </Container>
    )
}