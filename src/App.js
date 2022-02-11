import React, { useState, useEffect } from "react";
import { PageContent } from "./components/PageContent";
import { GetInspoQuote } from "./containers/GetInspoQuote";
import { Buttons } from "./components/Buttons";
import { Banner } from "./components/Banner";
import axios from 'axios';
import { SetGoalForm } from './components/SetGoalForm';
import {Goal} from './components/Goal';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [currentPageName, setCurrentPageName] = useState("In-Progress");
  const [dataRetrieved, setDataRetrieved] = useState([]);
  const [goalsData, setGoalsData] = useState([]);
  const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/goals`)
  //     .then((response) => {
  //       setDataRetrieved(response.data);
  //       // console.log(response.data);
  //     });
  // }, [goalsData]);

  function refreshData() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/goals`)
      .then((response) => {
        setGoalsData(response.data);
      });
  }

  useEffect(() => {
    refreshData();
  }, []);


  const addNewGoal = (newGoal) => {
    const goals = [...goalsData, newGoal];
    setGoalsData(goals)
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/goals`, newGoal)
      .then((response) => {
        refreshData();
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't create a new goal because a field is missing");
        
      });
  };

  const handleSetPageName = (pageName) => {
    setCurrentPageName(pageName);
  }

  return (
    <div className="App">
      <Banner />
      <GetInspoQuote />
      <Buttons 
      setCurrentPageName={setCurrentPageName}
      />
      <PageContent
        addNewGoal={addNewGoal}
        currentPageName={currentPageName}
        setCurrentPageName={setCurrentPageName}
        goalsData={goalsData}
        numberOfCompletedTasks={numberOfCompletedTasks}
        refreshData={refreshData}
      />
      
    </div>
  );
}

export default App;

