import React, { useState } from "react";
import "./GitHubCalendar.css";
import { GitHubCalendarProps } from "./GitHubCalendar.types";

const GitHubCalendar: React.FC<GitHubCalendarProps> = (props) => {
  return <div>{props.userName}</div>;
};

export default GitHubCalendar;
