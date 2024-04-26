import React, { useState } from "react";
import "./LeetCodeCalendar.css";
import { LeetCodeCalendarProps } from "./LeetCodeCalendar.types";

const LeetCodeCalendar: React.FC<LeetCodeCalendarProps> = (props) => {
  return <div>{props.userName}</div>;
};

export default LeetCodeCalendar;
