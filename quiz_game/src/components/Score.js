import QuestionList from "./QuestionList";
import {useState} from "react";
import React from "react";

const Score = ({currentQuestionIndex}) => {
    const [score, setScore] = useState (0);
    const [scoreBoard, setScoreBoard] = useState (false);
    

    const handleAnswerButton = (selectedAnswer) => {
        const currentQuestion = QuestionList[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.answer) {
          setScore (score + 1);
        }
      };
      return (
        <div>
            <h2>Results</h2>
            <h4>Your score: {score}</h4>
        </div>
      );
}

export default Score;
