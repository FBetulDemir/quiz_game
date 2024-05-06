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
        <button type="button" onClick={handleRestart}>Restart</button>
        <button type="button" onClick={onEndGame}>End Game, thanks for your participation</button>
    </div>
    );
};


    
