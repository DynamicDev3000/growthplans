import React, {useState} from "react";
import "../App.css";
import Container from '@material-ui/core/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import InfoIcon from '@mui/icons-material/Info';

export function ContentWateringStation() {
    const [showAlert, setShowAlert] = useState(false);
    const handleMouseEnter = e => {
        setShowAlert(true)
    }
    
    const handleMouseLeave = e => {
        setShowAlert(false)
        }

    return (
        <>
            <br></br>
            <Container className="watering">
                <br></br>
                <div className="watering-content">
                    <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                    <h2 className="bold"> 5-Second Rule <InfoIcon
                    color="info"
                    /></h2>
                    {showAlert &&
                    <Alert severity="info">
                        <AlertTitle>5-Second Rule by Mel Robbins</AlertTitle>
                        Your brain’s number one function is to protect you. When you hesitate, even for a second, your mind thinks that fear is coming and it tries to help you. You have five seconds to press on, move forward and take action. The more you repeat this habit and take action the more confidence and courage you will develop
                        <br></br>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/JRzWRZahOVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Alert>
                    }
                    </div>
                    <h4 ClassName="mel">The moment you have an instict to act on a goal, you must 5 - 4 - 3 - 2 - 1</h4>
                    <br></br>
                    <iframe src="https://pomodoro-timer-mu-seven.vercel.app/" width="500" height="670" frameborder="0" allowtransparency="true" title="timer" allow="encrypted-media"></iframe>
                    <br></br>
                    <iframe width="360" height="55" src="https://www.youtube.com/embed/lCroGB1huZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br></br>
            </Container>
        </>
    )
}