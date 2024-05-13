import {useState, useEffect} from "react";
import Quiz from "./components/Quiz";
import "./index.css";
import { Welcome } from "./components/Welcome";
import mainImage from "./assets/img.jpg"
import NavigationButton from "./components/NavigationButtons";
function App() {
  const [score, setScore] = useState (0);
  const [quizFinished, setQuizFinished] = useState (false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false); 
  const handleStartQuiz =() => { setShowQuiz(true); };
  useEffect(() => {

    document.body.style.backgroundImage = `url(${mainImage})`;
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "repeat";

    return () => {
      
      document.body.style.backgroundImage = "none";
    };
  }, [showQuiz]);
  return (
    <div className="App">
      {showQuiz ?
       (
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
        )
       : 
       ( 
       <Welcome onStartQuiz={handleStartQuiz} />      
       )}
    


    </div>
  );
}

export default App;
