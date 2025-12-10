import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SudokuBoard from '../components/SudokuBoard/SudokuBoard';
import Button from '../components/Button';
import Timer from '../components/Timer';
import Modal from '../components/Modal';
import { useSudokuGame } from '../hooks/useSudokuGame';
import { useSettingsStore } from '../store/useSettingsStore';
import { useLeaderboardStore } from '../store/useLeaderboardStore';
import styles from './GamePage.module.css';

function GamePage() {
    const navigate = useNavigate();
    const username = useSettingsStore((state) => state.username);
    const difficulty = useSettingsStore((state) => state.difficulty);
    const addScore = useLeaderboardStore((state) => state.addScore);

    const {
        board,
        initialBoard,
        errors,
        selectedCell,
        mistakes,
        time,
        isWin,
        isLose,
        selectCell,
        handleInput
    } = useSudokuGame();

    useEffect(() => {
        if (isWin) {
            const finalScore = Math.max(0, 10000 - (time * 10) - (mistakes * 500));
            addScore({
                name: username || 'Анонім',
                difficulty: difficulty,
                time: time,
                score: finalScore
            });
        }
    }, [isWin]);

    useEffect(() => {
        function handleKeyDown(event) {
            const { key } = event;
            if (key >= '1' && key <= '9') {
                handleInput(parseInt(key, 10));
            } else if (key === 'Backspace' || key === 'Delete') {
                handleInput(null);
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleInput]);

    function handleBack() {
        navigate('/');
    }

    function handleRestart() {
        window.location.reload();
    }

    const winModalContent = React.createElement('div', null,
        React.createElement('h2', null, 'Перемога!'),
        React.createElement('p', null, `Гравець: ${username}`),
        React.createElement('p', null, 'Час: ', React.createElement(Timer, { time: time })),
        React.createElement('div', { className: styles.modalActions },
            React.createElement(Button, { onClick: handleRestart }, 'Грати знову'),
            React.createElement(Button, { onClick: handleBack }, 'Меню')
        )
    );

    const loseModalContent = React.createElement('div', null,
        React.createElement('h2', null, 'Гру закінчено'),
        React.createElement('p', null, 'Забагато помилок'),
        React.createElement('div', { className: styles.modalActions },
            React.createElement(Button, { onClick: handleRestart }, 'Спробувати ще'),
            React.createElement(Button, { onClick: handleBack }, 'Меню')
        )
    );

    return (
        React.createElement('section', { className: styles.page },
            React.createElement('div', { className: styles.header },
                React.createElement('h3', null, `Гравець: ${username}`),
                React.createElement(Button, { onClick: handleBack }, 'Вихід')
            ),
            React.createElement('div', { className: styles.infoBar },
                React.createElement('div', { className: styles.stat },
                    `Помилки: ${mistakes}/3`
                ),
                React.createElement(Timer, { time: time })
            ),
            React.createElement(SudokuBoard, {
                board: board,
                initialBoard: initialBoard,
                errors: errors,
                selectedCell: selectedCell,
                onCellClick: selectCell
            }),
            (isWin || isLose) && React.createElement(Modal, { children: isWin ? winModalContent : loseModalContent })
        )
    );
}

export default GamePage;