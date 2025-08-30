import { useSelector } from "react-redux";
import Question from "./components/Question";
import Result from "./components/Result";

const questions = [
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
    ],
  },
  {
    question: "Which language is used in React?",
    options: [
      { text: "Python", isCorrect: false },
      { text: "JavaScript", isCorrect: true },
      { text: "C++", isCorrect: false },
    ],
  },
];

function App() {
  const { showResult } = useSelector((state) => state.quiz);

  return (
    <div className="app-shell">
      <div className="card">
        {!showResult ? (
          <Question questions={questions} />
        ) : (
          <Result total={questions.length} />
        )}
      </div>
    </div>
  );
}

export default App;
