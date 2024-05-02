import {useState} from "react";
import QuestionList from "./components/QuestionList";
import Score from "./components/Score";

function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="quiz-app">
        <div className="question-container">
          <div className="question-counter">
            <span>Question {currentQuestionIndex + 1}  </span>/ {QuestionList.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
