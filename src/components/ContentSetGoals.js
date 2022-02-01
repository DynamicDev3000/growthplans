import React, {useState} from "react";
import axios from "axios";

export function ContentSetGoals() {

    return (
    <form>
        <label> Let's get started by setting your plan(t) goals!</label>
        <br></br>
            <input type="text" name="goal" placeholder="Enter a goal name" />
        <br></br>
        <label>Deadline</label>
            <input type="date" name="deadline" placeholder="Enter a deadline" />
        <br></br>
        <label>Difficulty</label>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <br></br>
        <br></br>
        <label>Goal Description - why do you want to accomplish this?</label>
        <br></br>
            <textarea name="description" placeholder="Enter a description" />
        <br></br>
        <br></br>
        <label>Subtasks</label>
    </form>
    )
}