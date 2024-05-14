import { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import "./index.css";
import { Welcome } from "./components/Welcome";

// import NavigationButton from "./components/NavigationButtons";
function App() {
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div className="App">
      {showQuiz ? (
        <div className="quiz-app">
          <div className="quiz-section">
            <Quiz
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              score={score}
              setScore={setScore}
              setQuizFinished={setQuizFinished}
              quizFinished={quizFinished}
            />
        </div>
        {/* <div className="navigation-buttons-section">
            <NavigationButton currentQuestionIndex= {currentQuestionIndex} 
                              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
        </div> */}
      </div>
        )
       : 
       ( 
       <Welcome onStartQuiz={handleStartQuiz} />      
       )}
    


    </div>
  );
}

export default App;
