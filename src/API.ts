import { shuffleArray } from "./utils";

export type QuizType = {
  category: string;
  correct_answer: string;
  difficult: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = QuizType & { answers: string };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
// for later implimentation of category
//https://opentdb.com/api.php?amount=10&category=24
export const fetchQuizData = async (amount: number, difficulty: Difficulty) => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;

  const data = await (await fetch(endPoint)).json();
  return data.results.map((quizData: QuizType) => ({
    ...quizData,
    answers: shuffleArray([
      quizData.correct_answer,
      ...quizData.incorrect_answers,
    ]),
  }));
};
