import React from 'react';
import SudokuBoard from '../components/SudokuBoard/SudokuBoard';
import Button from '../components/Button.jsx';

function GamePage(props) {
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
            React.createElement(SudokuBoard, null)
        )
    );
}

export default GamePage;
