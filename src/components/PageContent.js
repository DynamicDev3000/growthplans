import React from "react";
import { ContentInProgressNursery } from "./ContentInProgressNursery";
import { ContentInspirationStation } from "./ContentInspirationStation";
import { SetGoalForm } from "./SetGoalForm";
import { ContentWateringStation} from "./ContentWateringStation"

export function PageContent(props) {
  const currentPage = props.currentPageName 
  if (currentPage === "In-Progress") {
    return <ContentInProgressNursery
      goalsData={props.goalsData}
      numberOfCompletedTasks={props.numberOfCompletedTasks}
      refreshData={props.refreshData}
      currentPageName={props.currentPageName}
      setCurrentPageName={props.setCurrentPageName}/>
  }
  if (currentPage === "Set-Goals") {
    return <SetGoalForm 
    addNewGoal={props.addNewGoal}/>;
  }
  if (currentPage === "Bragging-Garden") {
    return <ContentInspirationStation 
    goalsData={props.goalsData}
    numberOfCompletedTasks={props.numberOfCompletedTasks}/>;
  }
  if (currentPage === "Watering-Station") {
    return <ContentWateringStation />
  }
}