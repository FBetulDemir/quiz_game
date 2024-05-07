import React, { useState } from 'react';
import { Timer } from './Timer';

export const Buttons = ({ onRestart, onEndGame }) => {
    const [restartKey, setRestartKey] = useState(0);
    
    const handleRestart = () => {
        setRestartKey((prevKey) => prevKey + 1);
    };
        

    return (
        <div className='restart-buttons'>
        <Timer key={restartKey} onRestart={handleRestart} />
        <button className="buttons" type="button" onClick={handleRestart}>Restart</button>
        <button className="buttons" type="button" onClick={onEndGame}>End Game, thanks for your participation</button>
    </div>
    );
};


    
