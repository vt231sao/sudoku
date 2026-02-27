import React from 'react';
import Button from '../components/Button';

export default {
    title: 'Components/Basic/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: {
            action: 'clicked',
            description: 'Функція, яка викликається при кліку на кнопку'
        },
        type: {
            control: { type: 'select' },
            options: ['button', 'submit', 'reset'],
            description: 'Тип HTML-кнопки (за замовчуванням "button")',
        },
        children: {
            control: 'text',
            description: 'Текст або контент, що відображається всередині кнопки',
        },
        disabled: {
            control: 'boolean',
            description: 'Вимикає кнопку, роблячи її неактивною для кліків',
        }
    },
};

export const Primary = {
    args: {
        children: 'Почати гру',
        type: 'button',
        disabled: false,
    },
};

export const Disabled = {
    args: {
        children: 'Кнопка неактивна',
        type: 'button',
        disabled: true,
    },
};

export const SubmitType = {
    args: {
        children: 'Зберегти результат',
        type: 'submit',
        disabled: false,
    },
};