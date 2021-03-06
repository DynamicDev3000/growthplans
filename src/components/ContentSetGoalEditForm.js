import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import "../App.css";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';

const labels = {
    0.5: 'This drink, I like it. Another!',
    1: 'Dude, you’re embarrassing me in front of the wizards.',
    1.5: 'I get emails from a raccoon, so nothing sounds crazy anymore.',
    2: "Don't worry, she's got help",
    2.5: 'I can do this all day',
    3: "We're fighting an army of robots. And I have a bow and arrow.",
    3.5: 'Puny God',
    4: 'Dormammu, I’ve come to bargain.',
    4.5: 'I am Iron Man',
    5: 'Avengers, assemble!',
};

export function ContentSetGoalEditForm(props) {
    console.log(props)
    const [goalFields, setGoalFormFields] = useState({
        title: props.goalToEdit.title,
        due_date: props.goalToEdit.due_date,
        why: props.goalToEdit.why,
        difficulty: props.goalToEdit.difficulty
    });
    const [inputFields, setInputFields] = useState(props.goalToEdit.tasks);
    const [value, setValue] = useState(props.goalToEdit.difficulty);
    const [hover, setHover] = useState(props.goalToEdit.difficulty);

    const handleEditGoal = (submitEvent) => {
        submitEvent.preventDefault();

        const updatedGoalToEdit = {
            title: goalFields.title,
            due_date: goalFields.due_date,
            why: goalFields.why,
            difficulty: goalFields.difficulty,
            tasks: [...inputFields]
        };
        console.log(updatedGoalToEdit)
        axios
            .put(`${process.env.REACT_APP_BACKEND_URL}/goals/${props.goalToEdit.id}`, updatedGoalToEdit)
            .then((response) => {
                props.refreshData();
                props.setCurrentPageName("In-Progress");
            })
            .catch((error) => {
                console.log("Error:", error);
                alert("Couldn't edit goal because a field is missing");
            });

        setGoalFormFields({
            title: "",
            due_date: "",
            why: "",
            difficulty: "",
        })
        setInputFields([{
            description: ""
        }]);
    };

    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { description: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
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
        <>
            <br></br>
            <Container className="goal">
                <br></br>
                <div className="goal-content">
                    <form className={classes.root} onSubmit={handleEditGoal}>
                        <h2 className="bold">Need to edit your plan(t) goals?  Let's do it!</h2>
                        <br></br>
                        <TextField
                            name="title"
                            label="Edit goal title"
                            type='text'
                            value={goalFields.title}
                            onChange={(event) => setGoalFormFields({ ...goalFields, title: event.target.value })}
                            variant="outlined"
                            fullWidth
                        />
                        <br></br>
                        <br></br>
                        <h4><label className="bold">Deadline</label></h4>
                        <input type="date" name="deadline" placeholder="Enter a deadline"
                            value={goalFields.due_date}
                            onChange={(event) => setGoalFormFields({ ...goalFields, due_date: event.target.value })}
                        />
                        <br></br>
                        <br></br>
                        <h4><label className="bold">Difficulty </label></h4>
                        <div className="rating-box">
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Rating
                                name="difficulty"
                                value={value}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                    setGoalFormFields({ ...goalFields, difficulty: newValue });
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                            )}
                        
                        </Box>
                        </div>
                        <br></br>
                        <h4><label className="bold">Edit Goal Description</label></h4>
                        <TextField
                            name="why"
                            label="Why do REALLY you want to accomplish this?"
                            type='text'
                            value={goalFields.why}
                            onChange={(event) => setGoalFormFields({ ...goalFields, why: event.target.value })}
                            variant="outlined"
                            fullWidth
                        />
                        <br></br>
                        <br></br>
                        <h4><label className="bold">Edit Subtasks</label></h4>
                        {inputFields.map((inputField, index) => (
                            <div key={index}>
                                <TextField
                                    name="description"
                                    label="description"
                                    type='text'
                                    value={inputField.description}
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
                        <Button
                            className={classes.button}
                            variant="outlined"
                            color="primary"
                            type="submit"
                            endIcon={<Icon>send</Icon>}
                            onClick={handleEditGoal}
                        >Send Updates to Nursery</Button>
                        <Button
                            className={classes.button}
                            variant="outlined"
                            color="secondary"
                            type="cancel"
                            endIcon={<Icon>cancel</Icon>}
                            onClick={() => props.setCurrentPageName("In-Progress")}
                        >Cancel</Button>
                    </form>
                </div>
            </Container>
        </>
    )

}
