import { useState, useEffect } from 'react';

const useWorkoutTimer = (initialTime = 0) => {
    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, isPaused, time]);

    const startTimer = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const pauseTimer = () => {
        setIsPaused(true);
    };

    const resumeTimer = () => {
        setIsPaused(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setIsPaused(false);
        setTime(0);
    };

    return {
        time,
        isActive,
        isPaused,
        startTimer,
        pauseTimer,
        resumeTimer,
        resetTimer,
    };
};

export default useWorkoutTimer;