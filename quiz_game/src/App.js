
import {useState} from "react";
import Quiz from "./components/Quiz";

import { Timer } from "./components/Timer";


function App() {
  const [score, setScore] = useState (0);
  const [quizFinished, setQuizFinished] = useState (false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
      </div>

     <Timer/>

    </div>
  );
}

export default App;
