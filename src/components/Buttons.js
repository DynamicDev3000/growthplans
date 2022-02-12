import React from "react";
import Button from "react-bootstrap/Button";

export function Buttons(props) {
    
    return (
    <div className="Navigation">
        <Button variant="success" size="sm" onClick={() => props.setCurrentPageName("In-Progress")}>In-Progress Nursery</Button>
        <Button variant="info" size="sm" onClick={() => props.setCurrentPageName("Set-Goals")}>Set Plan(t) Goals</Button>
        <Button variant="success" size="sm" onClick={() => props.setCurrentPageName("Trophy-Garden")}>Trophy Garden</Button>
        <Button variant="info" size="sm" onClick={() => props.setCurrentPageName("Watering-Station")}>Watering Station</Button>
    </div>
    )
}