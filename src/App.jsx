import React, { useState, useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import { SettingsContext } from './context/SettingsContext';

function App() {
    const pageState = useState('start');
    const page = pageState[0];
    const setPage = pageState[1];

    const [gameId, setGameId] = useState(0);

    const { difficulty } = useContext(SettingsContext);

    function goToStart() {
        setPage('start');
    }

    function startGame() {
        setGameId(id => id + 1);
        setPage('game');
    }

    function retryGame() {
        setGameId(id => id + 1);
        setPage('game');
    }

    return (
        React.createElement('div', { className: 'app' },
            React.createElement(Header, null),
            React.createElement('main', { className: 'container' },
                page === 'start' && React.createElement(StartPage, { onStart: startGame }),
                page === 'game' && React.createElement(GamePage, {
                    key: difficulty + String(gameId),
                    onBack: goToStart,
                    onRetry: retryGame
                })
            ),
            React.createElement(Footer, null)
        )
    );
}

export default App;