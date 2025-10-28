import React from 'react';
import Button from '../components/Button.jsx';

function StartPage(props) {
    function handleStart() {
        props.onStart();
    }

    return (
        React.createElement('section', { className: 'page start-page' },
            React.createElement('h1', null, 'Sudoku'),
            React.createElement('p', null, 'Це каркас гри — вибір складності і правила будуть пізніше.'),
            React.createElement(Button, { onClick: handleStart }, 'Почати гру')
        )
    );
}

export default StartPage;
