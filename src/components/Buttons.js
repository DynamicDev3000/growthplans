import React from "react";
import Button from "react-bootstrap/Button";

export function Buttons(props) {

    return (
        <div className="Navigation">
            <Button className="buttons" variant="success" size="md" onClick={() => props.setCurrentPageName("In-Progress")}>✨ In-Progress Nursery</Button>
            <div className="divider" />
            <Button className="buttons" variant="success" size="md" onClick={() => props.setCurrentPageName("Set-Goals")}>Set Plan(t) Goals</Button>
            <div className="divider" />
            <Button className="buttons" variant="success" size="md" onClick={() => props.setCurrentPageName("Watering-Station")}>Watering Station</Button>
            <div className="divider" />
            <Button className="buttons" variant="success" size="md" onClick={() => props.setCurrentPageName("Trophy-Garden")}>Trophy Garden</Button>
            <div className="divider" />
            <Button className="buttons" variant="success" size="md" onClick={() => props.setCurrentPageName("Celebrate")}>Celebrate ✨</Button>
        </div>
    )
}