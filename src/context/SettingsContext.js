import React, { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

export function SettingsProvider(props) {
    const [difficulty, setDifficulty] = useState(() => {
        return localStorage.getItem('sudokuDifficulty') || 'medium';
    });

    useEffect(() => {
        localStorage.setItem('sudokuDifficulty', difficulty);
    }, [difficulty]);

    const value = {
        difficulty,
        setDifficulty
    };

    return React.createElement(SettingsContext.Provider, { value: value }, props.children);
}