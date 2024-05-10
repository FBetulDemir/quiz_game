import {useState} from "react";
import QuestionList from "./QuestionList";

const  NavigationButton = ({currentQuestionIndex, setCurrentQuestionIndex,}) => {
    const handleNextButtonClick = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < QuestionList.length){
            setCurrentQuestionIndex(nextQuestionIndex);
        }
    };
    return ( 
        <div className="navigation-buttons">
            <button onClick={handleNextButtonClick} disabled={QuestionList.id > 10}>Next</button>
        </div>
     );
}
 
export default NavigationButton;