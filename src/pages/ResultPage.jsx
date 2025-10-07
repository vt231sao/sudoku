import React from 'react';
import Button from '../components/Button.jsx';

function ResultsPage(props) {
    function handleRetry() {
        props.onRetry();
    }

    function handleHome() {
        props.onHome();
    }

    return (
        React.createElement('section', { className: 'page results-page' },
            React.createElement('h2', null, 'Результат'),
            React.createElement('p', null, 'Ваші очки: ' + (props.score == null ? '—' : String(props.score))),
            React.createElement('div', null,
                React.createElement(Button, { onClick: handleRetry }, 'Спробувати ще'),
                React.createElement(Button, { onClick: handleHome }, 'На головну')
            )
        )
    );
}

export default ResultsPage;
