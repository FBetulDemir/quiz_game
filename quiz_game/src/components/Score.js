import QuestionList from "./QuestionList";
import {useState} from "react";
import React from "react";

const Score = ({currentQuestionIndex}) => {
    const [score, setScore] = useState (0);
    
    

    const handleAnswerButton = (selectedAnswer) => {
        
        if (selectedAnswer === QuestionList[currentQuestionIndex].answer) {
          setScore (score + 1);
        }
      };
      return (
        <div>
            <div>
                {QuestionList[currentQuestionIndex].options.map((option) =>(
                <button 
                    className="answer-btn"
                    key={option}
                    onClick={()=> handleAnswerButton(option)}>
                    {option}  
                </button>
                ))}
            </div>
            <h2>Results</h2>
            <h4>Your score: {score}</h4>
        </div>
      );
}

export default Score;
