import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { SettingsContext } from '../context/SettingsContext';
import styles from './StartPage.module.css';

function StartPage() {
    const { difficulty, setDifficulty } = useContext(SettingsContext);
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            difficulty: difficulty,
            username: ''
        }
    });

    const watchDifficulty = watch('difficulty');

    React.useEffect(() => {
        setDifficulty(watchDifficulty);
    }, [watchDifficulty, setDifficulty]);

    function onSubmit(data) {
        navigate(`/game/${data.username}`);
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
                    }),
                    errors.username && React.createElement('span', { className: styles.errorText }, 'Введіть ім\'я (мін. 2 літери)')
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
                React.createElement(Button, { type: 'submit' }, 'Почати гру')
            )
        )
    );
}

export default StartPage;