import { useState, useEffect, useRef } from "react";
import { CoinFlip } from "./CoinFlip";

export const Timer = ({ onRestart }) => {
  const initialTime = 5 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const timerIdRef = useRef(null);
  useEffect(() => {
    const countdown = () => {
      timerIdRef.current = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timerIdRef.current);
            setTimeIsUp(true);
            return initialTime;
          }
        });
      }, 1000);
    };
    countdown();
    return () => clearInterval(timerIdRef.current);
  }, [onRestart, initialTime]);
  
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="container-timer">
     {!timeIsUp && <div className="clock"></div>}
     {!timeIsUp && <p>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </p>}
      {timeIsUp && <CoinFlip/>} 
    </div>
  );
};
