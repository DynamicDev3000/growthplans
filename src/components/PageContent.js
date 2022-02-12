import React, {useState} from "react";
import { ContentInProgressNursery } from "./ContentInProgressNursery";
import { ContentTrophyGarden } from "./ContentTrophyGarden";
import { ContentSetGoalForm } from "./ContentSetGoalForm";
import { ContentWateringStation} from "./ContentWateringStation"
import { ContentSetGoalEditForm } from "./ContentSetGoalEditForm";

export function PageContent(props) {
  const currentPage = props.currentPageName 
  const [goalToEdit, setGoalToEdit] = useState(null);

  if (currentPage === "In-Progress") {
    return <ContentInProgressNursery
      goalsData={props.goalsData}
      numberOfCompletedTasks={props.numberOfCompletedTasks}
      refreshData={props.refreshData}
      currentPageName={props.currentPageName}
      setCurrentPageName={props.setCurrentPageName}
      setGoalToEdit={setGoalToEdit}/>
  }

  if (currentPage === "Set-Goals") {
    return <ContentSetGoalForm 
    addNewGoal={props.addNewGoal}/>;
  }

  if (currentPage === "Trophy-Garden") {
    return <ContentTrophyGarden
    goalsData={props.goalsData}
    numberOfCompletedTasks={props.numberOfCompletedTasks}/>;
  }

  if (currentPage === "Watering-Station") {
    return <ContentWateringStation />
  }

  if (currentPage === "Edit-Goal") {
    return <ContentSetGoalEditForm
      refreshData={props.refreshData}
      goalToEdit={goalToEdit}
      onFormSubmit={props.handleEditFormSubmit}
      goalsData={props.goalsData}
      numberOfCompletedTasks={props.numberOfCompletedTasks}
      currentPageName={props.currentPageName}
      setCurrentPageName={props.setCurrentPageName}
      setGoaltoEdit={props.setGoaltoEdit}
      />
  }
}