import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useSettingsStore } from '../store/useSettingsStore';
import styles from './StartPage.module.css';

function StartPage() {
    const navigate = useNavigate();

    const username = useSettingsStore((state) => state.username);
    const difficulty = useSettingsStore((state) => state.difficulty);
    const setUsername = useSettingsStore((state) => state.setUsername);
    const setDifficulty = useSettingsStore((state) => state.setDifficulty);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: username,
            difficulty: difficulty
        }
    });

    function onSubmit(data) {
        setUsername(data.username);
        setDifficulty(data.difficulty);
        navigate('/game');
    }

    function handleLeaderboard() {
        navigate('/leaderboard');
    }

    return (
        React.createElement('section', { className: styles.page },
            React.createElement('h1', { className: styles.title }, 'Sudoku'),
            React.createElement('p', { className: styles.subtitle }, 'Оберіть параметри та введіть ім\'я'),

            React.createElement('form', { className: styles.form, onSubmit: handleSubmit(onSubmit) },
                React.createElement('div', { className: styles.group },
                    React.createElement('label', null, 'Ваше ім\'я:'),
                    React.createElement('input', {
                        type: 'text',
                        className: styles.input,
                        ...register('username', { required: true, minLength: 2 })
                    })
                ),
                React.createElement('div', { className: styles.group },
                    React.createElement('label', null, 'Складність:'),
                    React.createElement('select', {
                            className: styles.select,
                            ...register('difficulty')
                        },
                        React.createElement('option', { value: 'easy' }, 'Легкий'),
                        React.createElement('option', { value: 'medium' }, 'Середній'),
                        React.createElement('option', { value: 'hard' }, 'Складний')
                    )
                ),
                React.createElement(Button, { type: 'submit' }, 'Почати гру'),
                React.createElement(Button, { type: 'button', onClick: handleLeaderboard }, 'Таблиця результатів')
            )
        )
    );
}

export default StartPage;