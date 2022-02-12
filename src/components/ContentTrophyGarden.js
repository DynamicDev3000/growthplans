import React from "react";
import images from "../assets/images/index.js";
import "../App.css";
import ListGroup from 'react-bootstrap/ListGroup'
import { ListGroupItem } from "react-bootstrap";

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
    const toMeet =[1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 19, 22, 25, 27]
    const parts = [images.part3.path, images.part4.path, images.part5.path, images.part6.path, images.pond.path, images.raccoon.path, images.frog.path, images.cat1.path, images.dog1.path, images.snail.path, images.catCoding.path, images.chick.path, images.catBalloon.path, images.catPile.path]

    let i, j;
    for (i=0, j=0 ; i < toMeet.length; i++, j++) {
        gardenPictures.push({path: parts[j], hasPlant: numberOfCompletedGoals > toMeet[i]});
    }
    return gardenPictures; 
}

const badgeName = () => {
    const badgeNamesList = []
    const names = [
        "Wink", 
        "Happy", 
        "Blossom", 
        "Smile", 
        "I'm a Potato", 
        "Raccoon", 
        "Trash Panda", 
        "Froggie", 
        "Meow", 
        "Meow Bear", 
        "Gary", 
        "Cat Coding", 
        "Fluffly Chick", 
        "Up up and away", 
        "Ultimate Cat Pile"
    ]
    return names;
    }

const nextUpgrade = () => {
    const nextUpgradelist = []
    const lefttoUpgrade = [
        "1 more goal to unlock next",
        "1 more goals to unlock next",
        "1 more goals to unlock next",
        "1 more goals to unlock next",
        "2 more goals to unlock next",
        "2 more goals to unlock next",
        "2 more goals to unlock next",
        "2 more goals to unlock next",
        "3 more goals to unlock next",
        "3 more goals to unlock next",
        "3 more goals to unlock next",
        "3 more goals to unlock next",
        "4 more goals to unlock next",
    ]
    return nextUpgrade;
}

export function ContentTrophyGarden(props) {
    const total = numberOfCompletedGoals (props.goalsData);
    const plantImages = selectGardenImage(total);

    return (
    <div className="brag">
    <div className="brag-content">
    <h2>Gotta catch them all!</h2> 
    <h3>You've completed {total} goals!</h3>
    <h3>You've earned the following badges:</h3>
                
                {plantImages.map((plantImage) => {
                    const plantClass = plantImage.hasPlant ? "hasPlant" : "noPlant";
                return (
                    <ListGroup >
                    <ListGroup.Item variant="success" className={plantClass}>
                    <img key={plantImage.path} src={plantImage.path} alt={plantImage.alt} className='gardenpic'/>
                    </ListGroup.Item>
                    </ListGroup>
                )
                })}
    </div>
    </div>
    )
}


                

