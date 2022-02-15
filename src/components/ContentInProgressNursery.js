import React, { useState } from "react";
import images from "../assets/images/index.js";
import { Goal } from "./Goal";
import Carousel from 'react-bootstrap/Carousel'
import "../App.css";
import Container from '@material-ui/core/Container';

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
    } else if (numberOfCompletedTasks === 4) {
        return (images.part5);
    } else if (numberOfCompletedTasks === 3) {
        return (images.part4);
    } else if (numberOfCompletedTasks === 2) {
        return (images.part3);
    } else if (numberOfCompletedTasks === 1) {
        return (images.part2);
    } else if (numberOfCompletedTasks === 0) {
        return (images.part1);
    }
}

export function ContentInProgressNursery(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <br></br>
            <Container className="nursery">
                <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
                    {props.goalsData.map((goal) => {
                        if (goal.is_goal_completed === false) {
                            const total = countNumberOfCompletedTasks(goal);
                            const plantImage = selectImage(total);
                            return (
                                <Carousel.Item >
                                    <Goal goal={goal} key={goal.id}
                                        plantImage={plantImage}
                                        goalsData={props.goalsData}
                                        refreshData={props.refreshData}
                                        setCurrentPageName={props.setCurrentPageName}
                                        setGoalToEdit={props.setGoalToEdit}
                                    />
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </Carousel.Item>

                            )
                        }
                    })}
                </Carousel>
            </Container>
        </>
    )
}

