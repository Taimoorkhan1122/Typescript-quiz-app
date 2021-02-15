import React, { useState } from "react";
import { fetchQuizData, Difficulty } from "./API";

// components
import { SelectCategory, QuestionCard } from "./Components";

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // start the quiz
  const startQuiz = async () => {};

  // check answer
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  // next question
  const nextQuestion = () => {};

  console.log(fetchQuizData(TOTAL_QUESTIONS, Difficulty.HARD));

  return (
    <div className="App">
      <h1>React Quiz App</h1>
      <button className="start" onClick={startQuiz}>
        start quiz
      </button>
      <p>Score: </p>
      <p>Loading...</p>
      {/* <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next question
      </button>
      {/* <SelectCategory /> */}
    </div>
  );
}

export default App;
