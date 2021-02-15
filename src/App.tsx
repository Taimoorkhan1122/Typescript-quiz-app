import React, { useState } from "react";
import { fetchQuizData, Difficulty, QuestionState } from "./API";

// components
import { SelectCategory, QuestionCard } from "./Components";

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [category, setCategory] = useState("");

  // start the quiz
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizData(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      category
    );
    setQuestions(newQuestions);

    setUserAnswers([]);
    setScore(0);
    setNumber(0);
    setLoading(false);
  };

  // check answer
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    // user's selected answer
    const answer = e.currentTarget.value;
    // check if userAns is correct or not
    const isCorrect = answer === questions[number].correct_answer;
    // if answer is correct increment the score
    if (isCorrect) setScore((prevState) => prevState + 1);
    // saving the answers in answers array
    const answerObject = {
      question: questions[number].question,
      answer,
      isCorrect,
      correctAnswer: questions[number].correct_answer,
    };
    setUserAnswers((prevState) => [...prevState, answerObject]);
  };

  // next question
  const nextQuestion = () => {
    // check if not the last question the move on to next question otherwise end the quiz
    const nextQuestion = number + 1;
    nextQuestion === TOTAL_QUESTIONS
      ? setGameOver(true)
      : setNumber(nextQuestion);
  };

  // handler
  const handler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectCategory = e.currentTarget.value;
    selectCategory !== "any" && setCategory(selectCategory);
  };

  return (
    <div className="App">
      <h1>React Quiz App</h1>

      {/* if not game over and the its not the last answer than show this button */}
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <div className="container">
          <SelectCategory handler={handler} />
          <button className="start" onClick={startQuiz}>
            start quiz
          </button>
        </div>
      ) : null}
      {!gameOver && <p>Score: {score}</p>}
      {loading && !gameOver && <p>Loading...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNum={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {/* if not game over and not loading and has given atleast 1 answer and it's the last question then show this button */}
      {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 && (
          <button className="next" onClick={nextQuestion}>
            Next question
          </button>
        )}
    </div>
  );
};

export default App;
