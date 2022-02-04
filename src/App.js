import React, { useState, useEffect } from "react";
import { PageContent } from "./components/PageContent";
import { GetInspoQuote } from "./containers/GetInspoQuote";
import { Buttons } from "./components/Buttons";
import { Banner } from "./components/Banner";
import axios from 'axios';
import { SetGoalForm } from './components/SetGoalForm';


function App() {
  const [currentPageName, setCurrentPageName] = useState("In-Progress");
  const [goalsData, setGoalsData] = useState([]);
  const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/goals`)
      .then((response) => {
        setGoalsData(response.data);
      });
  }, []);

  // const goalsData = [
  //   {
  //   "id": 1,
  //   "tasks": [
  //       {
  //           "description": "Narrow down ideas",
  //           "goal_id": 1,
  //           "id": 1,
  //           "is_complete": false
  //       },
  //       {
  //           "description": "Look up artists on fiverr",
  //           "goal_id": 1,
  //           "id": 2,
  //           "is_complete": false
  //       },

  const addNewGoal = (NewGoal) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/goals`, { NewGoal })
      .then((response) => {
        const goals = [...goalsData];
        goals.push(response.data);
        setGoalsData(goals);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't create a new goal.");
      });
  };

  const handleSetPageName = (pageName) => {
    setCurrentPageName(pageName);
  }

  return (
    <div className="App">
      <Banner />
      <GetInspoQuote />
      <Buttons setCurrentPageName={setCurrentPageName} />
      <PageContent
        addNewGoal={addNewGoal}
        currentPageName={currentPageName}
        goalsData={goalsData}
        numberOfCompletedTasks={numberOfCompletedTasks}
      />
      {/* <iframe width="360" height="040" src="https://www.youtube.com/embed/lCroGB1huZU?rel=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </div>
  );
}

export default App;

