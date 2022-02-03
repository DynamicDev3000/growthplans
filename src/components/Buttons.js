import React from "react";
import { ContentInProgressNursery } from "./ContentInProgressNursery";
import { ContentInspirationStation } from "./ContentInspirationStation";
import { ContentSetGoals } from "./SetGoalForm";


export function Buttons(props) {
    
    return (
    <div>
        <button onClick={() => props.setCurrentPageName("In-Progress")}>In-Progress Nursery</button>
        <button onClick={() => props.setCurrentPageName("Set-Goals")}>Set Plant Goals</button>
        <button onClick={() => props.setCurrentPageName("Inspiration-Station")}>Inspiration Station</button>
    </div>
    )
}