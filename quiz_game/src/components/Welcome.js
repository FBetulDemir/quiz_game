import React, {useState} from 'react'
import Start from './Start'

export function Welcome({ onStartQuiz }) {
  const [userName, setUserName] = useState(''); 
  const handleNameChange = (newName) => { setUserName(newName); };
  return (
    <div>
      <Start onNameChange={handleNameChange} />
      <p>Hi, {userName}!</p>
      <h1>Welcome to Betcace online QUIZ GAME</h1>
      <button onClick={onStartQuiz}>start</button></div>  );
}