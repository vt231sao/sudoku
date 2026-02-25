import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent'; // Додаємо імпорт банера
import Layout from './components/Layout/Layout';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import LeaderboardPage from './pages/LeaderboardPage';

function App() {
    return (
        React.createElement(React.Fragment, null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: '/', element: React.createElement(Layout, null) },
                    React.createElement(Route, { index: true, element: React.createElement(StartPage, null) }),
                    React.createElement(Route, { path: 'game', element: React.createElement(GamePage, null) }),
                    React.createElement(Route, { path: 'leaderboard', element: React.createElement(LeaderboardPage, null) })
                )
            ),
            React.createElement(CookieConsent, {
                    location: "bottom",
                    buttonText: "Зрозумів, приймаю",
                    cookieName: "sudoku_gdpr_consent",
                    style: { background: "#2B373B", alignItems: "center" },
                    buttonStyle: { color: "#4e503b", fontSize: "14px", fontWeight: "bold", borderRadius: "4px" },
                    expires: 150
                },
                "Цей веб-сайт використовує локальне сховище (Local Storage) для збереження ваших ігрових налаштувань та прогресу згідно з GDPR. ",
                React.createElement('a', {
                    href: "/PRIVACY_POLICY.md",
                    target: "_blank",
                    rel: "noreferrer",
                    style: { color: "#61dafb", textDecoration: "underline" }
                }, "Дізнатися більше")
            )
        )
    );
}

export default App;