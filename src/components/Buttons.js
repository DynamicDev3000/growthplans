import React from "react";
import Button from "react-bootstrap/Button";

export function Buttons(props) {
    
    return (
    <div className="Navigation">
        <div className="d-grid gap-2">
        <Button variant="success" size="sm" onClick={() => props.setCurrentPageName("In-Progress")}>In-Progress Nursery</Button>
        <Button variant="success" size="sm" onClick={() => props.setCurrentPageName("Set-Goals")}>Set Plant Goals</Button>
        <Button variant="success" size="sm" onClick={() => props.setCurrentPageName("Inspiration-Station")}>Inspiration Station</Button>
        </div>
    </div>
    )
}