import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../redux/quizSlice";

const Question = ({ questions }) => {
  const dispatch = useDispatch();
  const { currentQuestion } = useSelector((state) => state.quiz);

  const q = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (isCorrect) => {
    dispatch(answerQuestion({ isCorrect, totalQuestions: questions.length }));
  };

  return (
    <div>
      <div className="progress" aria-hidden>
        <div className="progress-inner" style={{ width: `${progress}%` }} />
      </div>
      <h2 className="title">{q.question}</h2>
      <p className="subtitle">
        Question {currentQuestion + 1} of {questions.length}
      </p>
      <div className="options">
        {q.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(option.isCorrect)}
            className="btn"
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="footer">
        <span className="muted">Choose the best answer</span>
      </div>
    </div>
  );
};

export default Question;
