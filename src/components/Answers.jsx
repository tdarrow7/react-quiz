import React, { useRef } from "react";

export const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  console.log("answer state, ", answerState);

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelect(answer)}
              disabled={selectedAnswer !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};