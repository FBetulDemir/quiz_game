import React, { useState } from "react";
import Start from "./Start";

export function Welcome({ onStartQuiz }) {
  const [userName, setUserName] = useState("");
  const handleNameChange = (newName) => {
    setUserName(newName);
  };

  return (
    <div className="container-welcome">
      <div className="h1">
        <h1>Welcome to Betcace online QUIZ GAME</h1>
      </div>
      <div className="p">
        <p>Hi{userName}!</p>
      </div>
      <Start onNameChange={handleNameChange} />
      <button className="buttons" onClick={onStartQuiz}>
        Start
      </button>
    </div>
  );
}
