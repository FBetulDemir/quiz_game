import QuestionList from "./QuestionList";
import {useState} from "react";
import React from "react";

const Score = ({score}) => {
      return (
        <div>
            <h2>Results</h2>
            <h4>Your score: {score}</h4>
        </div>
      );
}

export default Score;
