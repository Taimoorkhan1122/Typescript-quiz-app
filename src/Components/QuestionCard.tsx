import React from "react";

// types
import { AnswerObject } from "../App";

type CardProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  questionNum: number;
  totalQuestions: number;
  userAnswer: AnswerObject | undefined;
};

// we want to tell typescript that this is a react functional compoent
//and it accepts props of following types
const QuestionCard: React.FC<CardProps> = ({
  question,
  answers,
  callback,
  questionNum,
  totalQuestions,
  userAnswer,
}) => {
  return (
    <div>
      <p className="number">
        {questionNum}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div>
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}>
              {/* answer we are getting from answers array */}
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
