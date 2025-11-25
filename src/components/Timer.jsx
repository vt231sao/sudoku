import React from 'react';
import styles from './Timer.module.css';

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function Timer(props) {
    return React.createElement('div', { className: styles.timer }, formatTime(props.time));
}

export default Timer;