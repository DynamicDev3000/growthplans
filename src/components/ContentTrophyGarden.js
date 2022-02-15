import React from "react";
import images from "../assets/images/index.js";
import "../App.css";
import ListGroup from 'react-bootstrap/ListGroup'
import Container from '@material-ui/core/Container';

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
    const toMeet = [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 19, 22, 25, 27]
    const parts = [images.part3.path, images.part4.path, images.part5.path, images.part6.path, images.pond.path, images.raccoon.path, images.frog.path, images.cat1.path, images.dog1.path, images.snail.path, images.catCoding.path, images.chick.path, images.catBalloon.path, images.catPile.path]
    const names = [
        "Wink",
        "Happy",
        "Blossom",
        "Smile",
        "I'm a Potato",
        "Trash Panda",
        "Garden Froggie",
        "Kitty",
        "Meow Bear",
        "Gary",
        "Cat Coding",
        "Fluffy Chick",
        "Up up and away",
        "Ultimate Cat Pile"
    ]
    const lefttoUpgrade = [
        "1 more to unlock next ✨",
        "1 more to unlock next ✨ ",
        "1 more to unlock next ✨",
        "1 more to unlock next ✨",
        "2 more to unlock next ✨",
        "2 more to unlock next ✨",
        "2 more to unlock next ✨",
        "2 more to unlock next ✨",
        "3 more to unlock next ✨",
        "3 more to unlock next ✨",
        "3 more to unlock next ✨",
        "3 more to unlock next ✨",
        "4 more to unlock next ✨",
        "Congratulations you have unlocked all characters!🎉"
    ]
    let i, j, k, l;
    for (i = 0, j = 0, k = 0, l = 0; i < toMeet.length; i++, j++, k++, l++) {
        gardenPictures.push({ path: parts[j], hasPlant: numberOfCompletedGoals > toMeet[i], name: names[k], leftToUpgrade: lefttoUpgrade[l] });
    }
    return gardenPictures;
}

export function ContentTrophyGarden(props) {
    const total = numberOfCompletedGoals(props.goalsData);
    const plantImages = selectGardenImage(total);

    return (
        <>
            <br></br>
            <Container className="brag">
                <br></br>
                <div className="brag-content">
                    <h2>You are now a certified plant parent! 🏆</h2>
                    <h3>You've completed {total} goals and earned the following badges:</h3>
                    {plantImages.map((plantImage) => {
                        const plantClass = plantImage.hasPlant ? "hasPlant" : "noPlant";
                        return (
                            <ListGroup >
                                <ListGroup.Item variant="success" className={plantClass}>
                                    <h3 className="name">{plantImage.name}</h3>
                                    <img key={plantImage.path} src={plantImage.path} alt={plantImage.alt} className='gardenpic' />
                                    <br></br>
                                    <br></br>
                                    <h3 className="left">{plantImage.leftToUpgrade}</h3>
                                </ListGroup.Item>
                            </ListGroup>
                        )
                    })}
                </div>
                <br></br>
            </Container>
        </>
    )
}




