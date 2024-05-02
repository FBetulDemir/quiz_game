import {useState} from "react";
import QuestionList from "./components/QuestionList";
import Score from "./components/Score";

function App() {

  const [scoreBoard, setScoreBoard] = useState (false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const nextQuestionIndex = currentQuestionIndex + 1;
  if (nextQuestionIndex < QuestionList.length) {
    setCurrentQuestionIndex(nextQuestionIndex);
  } else {
    setScoreBoard(true);
  }
  

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="quiz-app">
        <div className="question-counter">
            <span>Question {currentQuestionIndex + 1}  </span>/ 
            {QuestionList.length}
        </div>
        <div className="question-container">
          {QuestionList[currentQuestionIndex].question}
        </div>
        <div className="options-container">

        </div>
      </div>
    </div>
  );
}

export default App;
