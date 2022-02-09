import React, {useState} from "react";
import Draggable from "react-draggable";
import {Goal} from "./Goal";
import images from "../assets/images/index.js";

const numberOfCompletedGoals = (goal) => {
    let count = 0;
    for (let j = 0; j < goal.length; j++) {
        if (goal[j].is_goal_completed === true) {
            count += 1;
        }
    }
    return count;
}

const selectGardenImage = (numberOfCompletedGoals) => {
    const gardenPictures = []
    if (numberOfCompletedGoals > 1) {
        gardenPictures.push(images.part4);
    }
    if (numberOfCompletedGoals > 2) {
        gardenPictures.push(images.part4);
    }
    if (numberOfCompletedGoals > 3) {
        gardenPictures.push(images.part5);
    }
    if (numberOfCompletedGoals > 4) {
        gardenPictures.push(images.part6);
    }
    if (numberOfCompletedGoals > 5) {
        gardenPictures.push(images.pond);
    }
    if (numberOfCompletedGoals > 6) {
        gardenPictures.push(images.waterFountain);
    }
    if (numberOfCompletedGoals > 7) {
        gardenPictures.push(images.frog);
    }
    if (numberOfCompletedGoals > 8) {
        gardenPictures.push(images.frog);
    }
    if (numberOfCompletedGoals > 9) {
        gardenPictures.push(images.cat1)
    }
    if (numberOfCompletedGoals > 10) {
        gardenPictures.push(images.cat2)
    }
    console.log(gardenPictures)
    return gardenPictures;
}

export function ContentInspirationStation(props) {
    // const [selectGardenImage, setSelectGardenImage] = useState(props.selectImage);
    
    const total = numberOfCompletedGoals (props.goalsData);
    const plantImages = selectGardenImage(total);
    return (
    <div style = {{
        backgroundImage:  'url("https://www.picgifs.com/graphics/k/kawaii-scene/graphics-kawaii-scene-432830.gif")',
        // backgroundPosition: 'center',
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '55vh'
        }}>'
    <h1>Inspiration Station</h1>
    <h2>Here are some of the goals you have completed!</h2>
                {plantImages.map((plantImage) => {
                return (
                    <div>
                    <img src={images.pond.path} ></img>
                    <img  key={plantImage.path} src={plantImage.path} alt={plantImage.alt} className='gardenpic'/>
                    </div>
                )
                })}
    </div>
    )
}

