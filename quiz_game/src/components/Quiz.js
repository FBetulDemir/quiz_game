import { useState } from "react";
import QuestionList from "./QuestionList";
import Score from "./Score";

const Quiz = ({currentQuestionIndex, setCurrentQuestionIndex, setScore, score, quizFinished, setQuizFinished }) => {

    

    const handleAnswerButtonClick = (selectedAnswer) => {  
        if (selectedAnswer === QuestionList[currentQuestionIndex].answer) {
          setScore (score + 1);
          
        };
    
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < QuestionList.length) {
          setCurrentQuestionIndex(nextQuestionIndex);
        } else {
          setQuizFinished(true);
        }
    };
    if (quizFinished ===true){
        return <Score score={score}/>
    
    }

    return (
        <div>
            <div className="score-board">
                <h1>Quiz App</h1>
                <>Your current score is : {score}</>
            </div>
            <div className="question-counter">
                <span>Question {currentQuestionIndex + 1}  </span>/ 
                {QuestionList.length}
            </div>
            <div className="question-display">
                {QuestionList[currentQuestionIndex].question}
            </div>
            <div className="options-container">
                {QuestionList[currentQuestionIndex].options.map((option) =>(
                    <button 
                        className="answer-btn"
                        key={option}
                        onClick={()=> handleAnswerButtonClick(option)}>
                        {option}  
                    </button>
                ))}
            </div>  
        </div>
      
    );
}
 
export default Quiz;