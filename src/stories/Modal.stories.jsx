import React from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

export default {
    title: 'Components/Complex/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        docs: {
            story: {
                inline: false,
                iframeHeight: 400,
            },
        },
    },
    argTypes: {
        children: {
            control: false,
            description: 'Контент, що відображається всередині модального вікна (тексти, кнопки, форми).',
        }
    }
};

// 1. Екран перемоги (Стандартний стан)
export const VictoryScreen = {
    render: () => React.createElement(Modal, null,
        React.createElement('h2', { style: { margin: '0 0 15px 0', color: '#1f2937' } }, 'Перемога'),
        React.createElement('p', { style: { marginBottom: '20px', color: '#4b5563' } }, 'Час: 05:30. Помилок: 0.'),
        React.createElement(Button, { onClick: () => alert('Початок нової гри') }, 'Нова гра')
    )
};

// 2. Екран поразки (Попередження)
export const GameOverScreen = {
    render: () => React.createElement(Modal, null,
        React.createElement('h2', { style: { margin: '0 0 15px 0', color: '#dc2626' } }, 'Гру закінчено'),
        React.createElement('p', { style: { marginBottom: '20px', color: '#4b5563' } }, 'Ви досягли ліміту помилок (3/3).'),
        React.createElement(Button, { onClick: () => alert('Скидання поля') }, 'Спробувати знову')
    )
};

// 3. Меню паузи (Комплексний контент з декількома діями)
export const PauseMenu = {
    render: () => React.createElement(Modal, null,
        React.createElement('h2', { style: { margin: '0 0 20px 0', color: '#1f2937' } }, 'Пауза'),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '10px' } },
            React.createElement(Button, { onClick: () => alert('Продовження таймера') }, 'Продовжити'),
            React.createElement(Button, { onClick: () => alert('Відкриття налаштувань') }, 'Налаштування'),
            React.createElement(Button, { onClick: () => alert('Повернення на головну') }, 'Вийти в меню')
        )
    )
};
