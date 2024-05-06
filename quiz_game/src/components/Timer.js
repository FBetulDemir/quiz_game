import { useState, useEffect, useRef } from "react";

export const Timer = ({ onRestart }) => {
  const initialTime = 5 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const timerIdRef = useRef(null);
  useEffect(() => {
    const countdown = () => {
      timerIdRef.current = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timerIdRef.current);
            onRestart();
            return initialTime;
          }
        });
      }, 1000);
    };

    countdown();

    return () => clearInterval(timerIdRef.current);
  }, [onRestart, initialTime]);
  
  // const restartTimer = () => {
  //   clearInterval(timerId);
  //   setTimeRemaining(initialTime);
  // };

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <p>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </p>
    </div>
  );
};
