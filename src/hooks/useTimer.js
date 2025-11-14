import { useState, useEffect, useRef } from 'react';

export function useTimer(autoStart = false) {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(autoStart);
    const intervalRef = useRef(null);

    function startTimer() {
        setIsActive(true);
    }

    function stopTimer() {
        setIsActive(false);
    }

    function resetTimer() {
        setTime(0);
        setIsActive(autoStart);
    }

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setTime(t => t + 1);
            }, 1000);
        } else if (!isActive && intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isActive]);

    return { time, startTimer, stopTimer, resetTimer, isActive };
}