import React, {useState, useEffect} from "react";
import { PageContent } from "./components/PageContent";
import { GetInspoQuote } from "./containers/GetInspoQuote";
import { Buttons } from "./components/Buttons";
import { Banner } from "./components/Banner";
import axios from 'axios';


function App() {
  const [currentPageName, setCurrentPageName] = useState("In-Progress");
  const [goalsData, setGoalsData] = useState([]);
  const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);

  const [selectedGoal, setSelectedGoal] = useState({
    title: "",
    subtasks: [],
    id: null, 
  });

  useEffect(() => {    
    axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/goals`)
    .then((response) => {
      setGoalsData(response.data);
    });
  }, []);

  useEffect(() => {
    let count = 0;
    const getNumberOfCompletedTasks = goalsData.map((goal) => {
        goal.tasks.map((task) => {
            if (task.is_complete === true)
            count += 1;
        });
    });
    setNumberOfCompletedTasks(count);
}, [goalsData]);


  const selectGoal = (goal) => {
    setSelectedGoal(goal);
  };

  const createNewGoal = (newGoal) => {
    axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/goals`, newGoal)
    .then((response) => {
      const goals = [...goalsData];
      goals.push(response.data);
      setGoalsData(goals);
    });
  };

  const showSelectedGoal = (selectedGoal) => {
    if (selectedGoal.id) {
      return (
        <div>
          <h2>{selectedGoal.title}</h2>
          <ul>
            {selectedGoal.tasks.map((subtask) => {
              return (
                <li key={subtask.id}>
                  {subtask.title}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };
  
  const handleSetPageName = (pageName) => {
    setCurrentPageName(pageName);
  }

  return (
  <div className="App">
      <Banner/>
      <GetInspoQuote />
      <Buttons setCurrentPageName={setCurrentPageName}/>
      <PageContent 
      currentPageName={currentPageName}
      goalsData={goalsData}
      numberOfCompletedTasks={numberOfCompletedTasks}
      />
  </div>
  );
}

export default App;

