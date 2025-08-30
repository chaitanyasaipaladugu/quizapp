import { useDispatch, useSelector } from "react-redux";
import { resetQuiz } from "../redux/quizSlice";

const Result = ({ total }) => {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.quiz);

  const percent = Math.round((score / total) * 100);

  return (
    <div className="text-center">
      <h2 className="title">Quiz Finished!</h2>
      <p className="subtitle">
        You answered {score} of {total} correctly
      </p>

      <div className="progress" aria-hidden>
        <div className="progress-inner" style={{ width: `${percent}%` }} />
      </div>
      <p className="muted" style={{ marginTop: 8 }}>
        {percent}%
      </p>

      <div style={{ marginTop: 16 }}>
        <button
          onClick={() => dispatch(resetQuiz())}
          className="btn btn-success"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default Result;
