import React, { useEffect } from 'react';
import SudokuBoard from '../components/SudokuBoard/SudokuBoard';
import Button from '../components/Button';
import Timer from '../components/Timer';
import Modal from '../components/Modal';
import { useSudokuGame } from '../hooks/useSudokuGame';

function GamePage(props) {
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
        props.onBack();
    }

    function handleRestart() {
        props.onRetry();
    }

    const winModalContent = React.createElement('div', null,
        React.createElement('h2', null, 'Гру Завершено!'),
        React.createElement('p', null, 'Вітаємо, ви розв\'язали головоломку.'),
        React.createElement('p', null, 'Ваш час: ', React.createElement(Timer, { time: time, isActive: false })),
        React.createElement('p', null, 'Помилки: ' + mistakes),
        React.createElement('div', { className: 'modal-actions' },
            React.createElement(Button, { onClick: handleRestart }, 'Грати знову (той же рівень)'),
            React.createElement(Button, { onClick: handleBack }, 'Обрати інший рівень')
        )
    );

    const loseModalContent = React.createElement('div', null,
        React.createElement('h2', null, 'Гру Програно'),
        React.createElement('p', null, 'Ви допустили 3 помилки і не можете продовжувати.'),
        React.createElement('div', { className: 'modal-actions' },
            React.createElement(Button, { onClick: handleRestart }, 'Спробувати знову'),
            React.createElement(Button, { onClick: handleBack }, 'Обрати інший рівень')
        )
    );

    return (
        React.createElement('section', { className: 'page game-page' },
            React.createElement('div', { className: 'game-info-bar' },
                React.createElement('div', { className: 'game-stat' },
                    'Помилки: ' + mistakes + '/3'
                ),
                React.createElement('div', { className: 'game-stat' },
                    React.createElement(Timer, { time: time, isActive: !isWin && !isLose })
                )
            ),
            React.createElement(SudokuBoard, {
                board: board,
                initialBoard: initialBoard,
                errors: errors,
                selectedCell: selectedCell,
                onCellClick: selectCell
            }),
            React.createElement('div', { className: 'controls' },
                React.createElement(Button, { onClick: handleBack }, 'Назад')
            ),
            (isWin || isLose) && React.createElement(Modal, { children: isWin ? winModalContent : loseModalContent })
        )
    );
}

export default GamePage;