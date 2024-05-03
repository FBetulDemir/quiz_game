import React from 'react'


export const Buttons = () => {
    ({ onRestart, onEndGame }) => {
        return (
          <div>
            <button onClick={onRestart}>Restart</button>
            <button onClick={onEndGame}>End Game, thanks for you participation</button>
          </div>
        );
      };


  return (
    <div>Buttons</div>
  )
}
