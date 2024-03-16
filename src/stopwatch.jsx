import React, { useState } from 'react';

function Stopwatch() {
    const [start, setStart] = useState(null);
    const [intervalId, setintervalId] = useState(null);
    const startTimer = () => {
        const intervalId = setInterval(() => {
            setStart(prevTime => prevTime + 1);
        }, 1000);
        return intervalId;
    }

    const stopTimer = () => {
        clearInterval(intervalId);
        setStart(0);
        setintervalId(null);
    }

    return (
        <>
            <div>Time: {start}</div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </>
    );
}

export default Stopwatch;
