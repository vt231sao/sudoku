import React, { useContext } from 'react';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { SettingsContext } from '../context/SettingsContext';

function StartPage(props) {
    const { difficulty, setDifficulty } = useContext(SettingsContext);

    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            difficulty: difficulty
        }
    });

    const watchDifficulty = watch('difficulty');

    React.useEffect(() => {
        setDifficulty(watchDifficulty);
    }, [watchDifficulty, setDifficulty]);

    function onSubmit(data) {
        props.onStart();
    }

    return (
        React.createElement('section', { className: 'page start-page' },
            React.createElement('h1', null, 'Sudoku'),
            React.createElement('p', null, 'Оберіть рівень складності, щоб почати гру.'),

            React.createElement('form', { className: 'settings-form', onSubmit: handleSubmit(onSubmit) },
                React.createElement('div', { className: 'form-group' },
                    React.createElement('label', { htmlFor: 'difficulty' }, 'Складність:'),
                    React.createElement('select', {
                            id: 'difficulty',
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