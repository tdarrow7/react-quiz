import React, { useState } from "react";
import { QuestionTimer } from "./QuestionTimer";
import { Answers } from "./Answers";

export const Question = ({
  questionText,
  answers,
  onSelectAnswer,
  onSkipAnswer,
}) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;
  if (answer.selectedAnswer !== "") timer = 500;
  if (answer.isCorrect !== null) timer = 500;

  const handleSelectAnswer = (_answer) => {
    setAnswer({
      selectedAnswer: _answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: _answer,
        isCorrect: _answer === answers[0],
      });

      setTimeout(() => {
        onSelectAnswer(_answer);
      }, 500);
    }, 500);
  };

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) answerState = "answered";

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        timeout={timer}
        mode={answerState}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};
