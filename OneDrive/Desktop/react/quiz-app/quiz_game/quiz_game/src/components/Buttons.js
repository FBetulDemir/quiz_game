import React, { useState } from 'react';
import { CoinFlip } from './CoinFlip';

export const Buttons = ({ onRestart, onEndGame }) => {
    const [restartKey, setRestartKey] = useState(0);
    
    const handleRestart = () => {
        setRestartKey((prevKey) => prevKey + 1);
        window.location.reload();
    };
    
        

    return (
        <div className='restart-buttons'>
        <button className="buttons" type="button" onClick={handleRestart}>Restart</button>
       
        <CoinFlip/>
    </div>
    );
};


    
