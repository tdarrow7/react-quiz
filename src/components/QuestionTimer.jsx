import React, { useEffect, useState } from "react";

export const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const tmr = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(tmr);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
};
