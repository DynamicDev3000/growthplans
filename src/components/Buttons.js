import React from "react";

export function Buttons(props) {
    
    return (
    <div className="Navigation">
        <button onClick={() => props.setCurrentPageName("In-Progress")}>In-Progress Nursery</button>
        <button onClick={() => props.setCurrentPageName("Set-Goals")}>Set Plant Goals</button>
        <button onClick={() => props.setCurrentPageName("Inspiration-Station")}>Inspiration Station</button>
    </div>
    )
}