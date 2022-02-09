
import React, {useState} from "react";
import Draggable from "react-draggable";
import {Goal} from "./Goal";
import { countNumberOfCompletedTasks, selectImage } from "./ContentInProgressNursery";
import images from "../assets/images/index.js";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useDrag } from 'react-dnd';


export function GardenUpgrades(props) {



    return (
        <DndProvider backend={HTML5Backend}>

        </DndProvider>
    )
}

