import React, { useEffect } from 'react';
import SudokuBoard from '../components/SudokuBoaard/SudokuBoard';
import Button from '../components/Button';
import { useSudokuGame } from '../hooks/useSudokuGame';
function GamePage(props) {
    const {
        board,
        initialBoard,
        selectedCell,
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

    function handleFinishClick() {
        props.onFinish(100);
    }

    return (
        React.createElement('section', { className: 'page game-page' },
            React.createElement('div', { className: 'controls' },
                React.createElement(Button, { onClick: handleBack }, 'Назад'),
                React.createElement(Button, { onClick: handleFinishClick }, 'Закінчити')
            ),
            React.createElement(SudokuBoard, {
                board: board,
                initialBoard: initialBoard,
                selectedCell: selectedCell,
                onCellClick: selectCell
            })
        )
    );
}

export default GamePage;
