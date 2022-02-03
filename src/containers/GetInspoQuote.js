import React, {useState, useEffect} from 'react';
import axios from "axios";

export const GetInspoQuote = () => {
    const affirmations = [
        "You got this",
        "You'll figure it out",
        "You're a smart cookie",
        "I believe in you",
        "Sucking at something is the first step towards being good at something",
        "Struggling is part of learning",
        "Everything has cracks - that's how the light gets in",
        "Mistakes don't make you less capable",
        "We are all works in progress",
        "You are a capable human",
        "You know more than you think",
        "10x engineers are a myth",
        "If everything was easy you'd be bored",
        "I admire you for taking this on",
        "You're resourceful and clever",
        "You'll find a way",
        "I know you'll sort it out",
        "Struggling means you're learning",
        "You're doing a great job",
        "It'll feel magical when it's working",
        "I'm rooting for you",
        "Your mind is full of brilliant ideas",
        "You make a difference in the world by simply existing in it",
        "You are learning valuable lessons from yourself every day",
        "You are worthy and deserving of respect",
        "You know more than you knew yesterday",
        "You're an inspiration",
        "Your life is already a miracle of chance waiting for you to shape its destiny",
        "Your life is about to be incredible",
        "Nothing is impossible. The word itself says 'I’m possible!'",
        "Failure is just another way to learn how to do something right",
        "I give myself permission to do what is right for me",
        "You can do it",
        "It is not a sprint, it is a marathon. One step at a time",
        "Success is the progressive realization of a worthy goal",
        "People with goals succeed because they know where they’re going",
        "All you need is the plan, the roadmap, and the courage to press on to your destination",
        "The opposite of courage in our society is not cowardice... it is conformity",
        "Whenever we’re afraid, it’s because we don’t know enough. If we understood enough, we would never be afraid",
        "The past does not equal the future",
        "The path to success is to take massive, determined action",
        "It’s what you practice in private that you will be rewarded for in public",
        "Small progress is still progress",
        "Don't worry if you find flaws in your past creations, it's because you've evolved",
        "Starting is the most difficult step - but you can do it",
        "Don't forget to enjoy the journey",
        "It's not a mistake, it's a learning opportunity",
        "Compromise where you can. Where you can't, don't. Even if everyone is telling you that something wrong is something right. Even if the whole world is telling you to move, it is your duty to plant yourself like a tree, look them in the eye, and say, 'No, *you* move'— Sharon Carter",
        "Everyone fails at who they're supposed to be, Thor. The measure of a person, of a hero, is how well they succeed at being who they are — Frigga",
        "You can do it. You can do anything. You’re the world’s greatest grandma.” —Cassie Lang",
        "Today we don’t fight for one life, we fight for all of them -Black Panther",
        "I’m made of rocks, as you can see, but don’t let that intimidate you. You don’t need to be afraid, unless you’re made of scissors! Just a little rock-paper-scissors joke for you! —Korg",
        "You never know. You hope for the best and make do with what you get -Nick Fury",
        "I make grave mistakes all the time. Everything seems to work out - Thor",
        "But what is grief, if not love persevering? - Vision"
    ];

      const getRandomAffirmation = () => affirmations[Math.floor(Math.random() * affirmations.length)];

    return (
        <div><p>Your inspiration for the day:  {getRandomAffirmation()}</p></div>
    );
}
