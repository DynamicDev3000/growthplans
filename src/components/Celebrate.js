import React from "react";
import "../App.css";
import Container from '@material-ui/core/Container';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export function Celebrate(props) {



    return (
        <>
            <br></br>
            <Container className="standing-ovation">
                <br></br>
                <div className="standing-ovation-content">
                    <div className="music">
                        <iframe width="360" height="40" src="https://www.youtube.com/embed/QqLs0CBNoSA?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="greeting"><h2>You have completed all these goals! 🎉 </h2></div>
                    <img className="groot" src="https://c.tenor.com/pCPENOxdCjQAAAAC/groot-dancing.gif" alt="standing-ovation" ></img>
                    <div className="end-credits">
                        <div className="wrapper">
                            {props.goalsData.map((goal) => {
                                if (goal.is_goal_completed === true) {
                                    return (
                                        <div key={goal.id}>
                                            <h3 className="bold"><ul>{goal.title}</ul></h3>
                                            <h5><ul>Difficulty:
                                                <Rating
                                                    name="read-only"
                                                    value={goal.difficulty}
                                                    readOnly
                                                    className="rating"
                                                    size="small"
                                                    precision={0.5}
                                                    icon={<StarIcon fontSize="inherit" />}
                                                /></ul></h5>
                                            <h5><ul>Deadline: {goal.due_date}</ul></h5>
                                            <h5><ul>Motivator: {goal.why}</ul></h5>
                                            <br></br>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
                <br></br>
            </Container>
        </>
    )
}

