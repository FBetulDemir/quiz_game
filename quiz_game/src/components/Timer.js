import { useState, useEffect, useRef } from "react";
import { CoinFlip } from "./CoinFlip";
import timesupImage from "../assets/Time-is-up.jpg";

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
            document.body.style.backgroundImage = `url(${timesupImage})`;
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
      <div className="timer">
        <div className="clock"></div>
      </div>
      <p>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </p>
      {timeIsUp && <CoinFlip />}
    </div>
  );
};
