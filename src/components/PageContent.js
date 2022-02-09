import React from "react";
import { ContentInProgressNursery } from "./ContentInProgressNursery";
import { ContentInspirationStation } from "./ContentInspirationStation";
import { SetGoalForm } from "./SetGoalForm";
import App from "../App";

export function PageContent(props) {
  const currentPage = props.currentPageName 
  if (currentPage === "In-Progress") {
    return <ContentInProgressNursery
      goalsData={props.goalsData}
      numberOfCompletedTasks={props.numberOfCompletedTasks}
      refreshData={props.refreshData}/>;
  }
  if (currentPage === "Set-Goals") {
    return <SetGoalForm 
    addNewGoal={props.addNewGoal}/>;
  }
  if (currentPage === "Inspiration-Station") {
    return <ContentInspirationStation 
    goalsData={props.goalsData}
    numberOfCompletedTasks={props.numberOfCompletedTasks}/>;
  }
}