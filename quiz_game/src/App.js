import {useState} from "react";
import Quiz from "./components/Quiz";
import { Buttons } from "./components/Buttons";
import "./index.css";
import NavigationButton from "./components/NavigationButtons";
import Score from "./components/Score";

function App() {
  const [score, setScore] = useState (0);
  const [quizFinished, setQuizFinished] = useState (false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  if (quizFinished ===true){
    return <Score score={score}/>

  };
  return (
    <div className="App">

      <div className="quiz-app">
        <div className="quiz-section">
            <Quiz currentQuestionIndex= {currentQuestionIndex} 
                  setCurrentQuestionIndex={setCurrentQuestionIndex}
                  score={score}
                  setScore={setScore}
                  setQuizFinished={setQuizFinished}
                  quizFinished={quizFinished}
            />
        </div>
        <div className="navigation-buttons-section">
            <NavigationButton currentQuestionIndex= {currentQuestionIndex} 
                              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
