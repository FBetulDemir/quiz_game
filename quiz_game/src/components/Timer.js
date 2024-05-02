import { useState, useEffect } from "react";

export const Timer = ({ onRestart }) => {
  const initialTime = 5 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  let timerId;
  useEffect(() => {
    const countdown = () => {
      timerId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timerId);
            onRestart();
            return initialTime;
          }
        });
      }, 1000);
    };
    
    countdown();

    return () => clearInterval(timerId);
  }, [onRestart]);

  return (
    <div>
      <p>
       
      </p>
    </div>
  );
};
