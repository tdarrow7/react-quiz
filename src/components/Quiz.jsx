import React, { useState, useCallback } from "react";
import QUESTIONS from "../Questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import { QuestionTimer } from "./QuestionTimer";
import { Answers } from "./Answers";
import { Question } from "./Question";
import { Summary } from "./Summary";

export const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  return (
    <div id="quiz">
      {quizIsComplete ? (
        <Summary userAnswers={userAnswers} />
      ) : (
        <Question
          key={activeQuestionIndex}
          questionText={QUESTIONS[activeQuestionIndex].text}
          answers={QUESTIONS[activeQuestionIndex].answers}
          onSelectAnswer={handleSelectAnswer}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          onSkipAnswer={() => handleSkipAnswer(null)}
        />
      )}
    </div>
  );
};
