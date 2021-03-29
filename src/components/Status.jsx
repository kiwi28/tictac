import React, { useState } from "react";
import { getMessageByStatus } from "../utils.js";
import "../styles/Status.css";

export const Status = ({ winner = null, next }) => {
  return getMessageByStatus(winner, next);
};

export default Status;
