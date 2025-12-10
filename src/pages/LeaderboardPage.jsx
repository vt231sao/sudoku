import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Timer from '../components/Timer';
import { useLeaderboardStore } from '../store/useLeaderboardStore';
import styles from './LeaderboardPage.module.css';

function LeaderboardPage() {
    const navigate = useNavigate();
    const scores = useLeaderboardStore((state) => state.scores);

    function handleBack() {
        navigate('/');
    }

    return (
        React.createElement('section', { className: styles.page },
            React.createElement('h1', { className: styles.title }, 'Таблиця результатів'),
            React.createElement('div', { className: styles.tableWrapper },
                scores.length === 0 ? (
                    React.createElement('p', { className: styles.empty }, 'Поки що немає результатів. Зіграйте гру!')
                ) : (
                    React.createElement('table', { className: styles.table },
                        React.createElement('thead', null,
                            React.createElement('tr', null,
                                React.createElement('th', null, 'Ім\'я'),
                                React.createElement('th', null, 'Складність'),
                                React.createElement('th', null, 'Час'),
                                React.createElement('th', null, 'Очки'),
                                React.createElement('th', null, 'Дата')
                            )
                        ),
                        React.createElement('tbody', null,
                            scores.map((record, index) => (
                                React.createElement('tr', { key: index },
                                    React.createElement('td', null, record.name),
                                    React.createElement('td', null, record.difficulty === 'easy' ? 'Легкий' : record.difficulty === 'medium' ? 'Середній' : 'Складний'),
                                    React.createElement('td', null, React.createElement(Timer, { time: record.time })),
                                    React.createElement('td', null, record.score),
                                    React.createElement('td', null, new Date(record.date).toLocaleDateString())
                                )
                            ))
                        )
                    )
                )
            ),
            React.createElement(Button, { onClick: handleBack }, 'На головну')
        )
    );
}

export default LeaderboardPage;