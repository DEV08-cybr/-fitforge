import React, { useState, useEffect } from 'react';

const WorkoutTimer = ({ duration, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer = null;

        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            onComplete();
            setIsActive(false);
        }

        return () => clearInterval(timer);
    }, [isActive, timeLeft, onComplete]);

    const startTimer = () => {
        setIsActive(true);
    };

    const pauseTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setTimeLeft(duration);
        setIsActive(false);
    };

    return (
        <div className="workout-timer">
            <h2>Time Left: {timeLeft}s</h2>
            <button onClick={startTimer} disabled={isActive}>Start</button>
            <button onClick={pauseTimer} disabled={!isActive}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default WorkoutTimer;