import React from "react";
import { ContentInProgressNursery } from "./ContentInProgressNursery";
import { ContentInspirationStation } from "./ContentInspirationStation";
import { ContentSetGoals } from "./ContentSetGoals";

export function PageContent(props) {
  const currentPage = props.currentPageName 
  if (currentPage === "In-Progress") {
    return <ContentInProgressNursery />;
  }
  if (currentPage === "Set-Goals") {
    return <ContentSetGoals />;
  }
  if (currentPage === "Inspiration-Station") {
    return <ContentInspirationStation />;
  }
}