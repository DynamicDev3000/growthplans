import React from "react";
import { ContentInProgressNursery } from "./ContentInProgressNursery";
import { ContentInspirationStation } from "./ContentInspirationStation";
import { SetGoalForm } from "./SetGoalForm";

export function PageContent(props) {
  const currentPage = props.currentPageName 
  if (currentPage === "In-Progress") {
    return <ContentInProgressNursery
      goalsData={props.goalsData}
      numberOfCompletedTasks={props.numberOfCompletedTasks}/>;
  }
  if (currentPage === "Set-Goals") {
    return <SetGoalForm />;
  }
  if (currentPage === "Inspiration-Station") {
    return <ContentInspirationStation />;
  }
}