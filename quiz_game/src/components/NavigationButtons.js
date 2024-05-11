import {useState} from "react";
import QuestionList from "./QuestionList";

const  NavigationButton = ({currentQuestionIndex, setCurrentQuestionIndex,}) => {
    const handleNextButtonClick = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < QuestionList.length){
            setCurrentQuestionIndex(nextQuestionIndex);
        }
    };
    const handlePreviousButtonClick = () => {
        const previousQuestionIndex = currentQuestionIndex - 1;
        if (previousQuestionIndex >= 0){
            setCurrentQuestionIndex(previousQuestionIndex)
        }
    };
    return ( 
        <div className="navigation-buttons">
            <button onClick={handlePreviousButtonClick} disabled= {QuestionList.length === 0}>Previous</button>
            <button onClick={handleNextButtonClick} disabled={QuestionList.id > 10}>Next</button>
        </div>
     );
}
 
export default NavigationButton;