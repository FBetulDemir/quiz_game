import {useState} from "react";
import QuestionList from "./components/QuestionList";
import Score from "./components/Score";

function App() {
  const [score, setScore] = useState (0);
  const [quizFinished, setQuizFinished] = useState (false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
    return <Score />
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <></>
      <div className="quiz-app">
        <div className="question-counter">
            <span>Question {currentQuestionIndex + 1}  </span>/ 
            {QuestionList.length}
        </div>
        <div className="question-container">
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
          ))};         
        </div>
      </div>
    </div>
  );
}

export default App;
