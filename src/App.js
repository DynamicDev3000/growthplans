import React, {useState} from "react";
import { PageContent } from "./components/PageContent";
import { GetInspoQuote } from "./containers/GetInspoQuote";
import { Buttons } from "./components/Buttons";
import { Banner } from "./components/Banner";
import plantData from "./assets/goalsData";

function App() {
  const [currentPageName, setCurrentPageName] = useState("In-Progress");
  const [lastName, setLastName] = useState("");


    // const currentPageName = "Home";
  const handleSetPageName = (pageName) => {
    setCurrentPageName(pageName);
  }
  return(
  <div className="App">
      <Banner/>
      <GetInspoQuote />
      <Buttons setCurrentPageName={setCurrentPageName}/>
      <PageContent currentPageName={currentPageName}/>
  </div>
  );
}

export default App;

{/* <div class="container">
  
  <div class="New-Goal-Name"></div>
  <div class="Settings">
    <div class="Deadline"></div>
    <div class="Difficulty-Scale"></div>
  </div>
  <div class="Description\:"></div>
  <div class="Description-box"></div>
  <div class="Subtasks\:"></div>
  <div class="Subtask-list">
    <HandleSubtasks />
    </div>
  <div class="Add-to-Nursery-Button"></div>
  <div class="Plant-gif"></div>
</div> */}