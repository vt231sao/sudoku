import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultsPage from './pages/ResultsPage';

function App() {
    const pageState = useState('start');
    const page = pageState[0];
    const setPage = pageState[1];

    const scoreState = useState(null);
    const score = scoreState[0];
    const setScore = scoreState[1];

    function goToStart() {
        setPage('start');
    }

    function startGame() {
        setPage('game');
    }

    function finishGame(finalScore) {
        setScore(finalScore);
        setPage('results');
    }

    function retryGame() {
        setPage('game');
    }

    return (
        React.createElement('div', { className: 'app' },
            React.createElement(Header, null),
            React.createElement('main', { className: 'container' },
                page === 'start' && React.createElement(StartPage, { onStart: startGame }),
                page === 'game' && React.createElement(GamePage, { onFinish: finishGame, onBack: goToStart }),
                page === 'results' && React.createElement(ResultsPage, { score: score, onRetry: retryGame, onHome: goToStart })
            ),
            React.createElement(Footer, null)
        )
    );
}

export default App;
