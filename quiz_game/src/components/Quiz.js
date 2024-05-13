import QuestionList from "./QuestionList";
import Score from "./Score";
import { Timer } from "./Timer";

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
  
    };

   

  return (
    <div className="quiz">
      <div className="question-counter">
        <span>Question {currentQuestionIndex + 1} </span>/{QuestionList.length}
      </div>
      <div className="question-display">
        <span>{QuestionList[currentQuestionIndex].question}</span>
      </div>
      <div className="container-buttons">
        {QuestionList[currentQuestionIndex].options.map((option) => (
          <button
            className="buttons"
            key={option}
            onClick={() => handleAnswerButtonClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <Timer />
    </div>
  );
};

export default Quiz;
