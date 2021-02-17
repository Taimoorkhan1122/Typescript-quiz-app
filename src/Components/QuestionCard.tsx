import React from "react";

// types
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

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
    <Wrapper>
      <p className="question-count">
        {questionNum}/{totalQuestions}
      </p>
      <div className="questionArea">
        <p dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}>
            <button
              className="answer-list"
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}>
              {/* answer we are getting from answers array */}
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
