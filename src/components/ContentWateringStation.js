import React from "react";
import "../App.css";
import Container from '@material-ui/core/Container';

export function ContentWateringStation() {

    return (
        <>
            <br></br>
            <Container className="watering">
                <br></br>
                <div className="watering-content">
                    <iframe src="https://pomodoro-timer-mu-seven.vercel.app/" width="500" height="670" frameborder="0" allowtransparency="true" title="timer" allow="encrypted-media"></iframe>
                    <br></br>
                    <iframe width="360" height="55" src="https://www.youtube.com/embed/lCroGB1huZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br></br>
            </Container>
        </>
    )
}