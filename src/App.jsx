import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import Layout from './components/Layout/Layout';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import LeaderboardPage from './pages/LeaderboardPage';

function App() {
    const [hasConsent, setHasConsent] = useState(getCookieConsentValue('sudoku_gdpr_consent') === "true");

    return (
        React.createElement(React.Fragment, null,
            hasConsent ? (
                React.createElement(Routes, null,
                    React.createElement(Route, { path: '/', element: React.createElement(Layout, null) },
                        React.createElement(Route, { index: true, element: React.createElement(StartPage, null) }),
                        React.createElement(Route, { path: 'game', element: React.createElement(GamePage, null) }),
                        React.createElement(Route, { path: 'leaderboard', element: React.createElement(LeaderboardPage, null) })
                    )
                )
            ) : (
                // Красивий екран блокування (Card UI)
                React.createElement('div', {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '100vh',
                            backgroundColor: '#f3f4f6', // Світло-сірий фон всієї сторінки
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }
                    },
                    React.createElement('div', {
                            style: {
                                backgroundColor: '#ffffff', // Біла картка
                                padding: '40px 30px',
                                borderRadius: '16px', // Закруглені кути
                                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', // Красива тінь
                                textAlign: 'center',
                                maxWidth: '450px',
                                width: '90%'
                            }
                        },
                        React.createElement('div', { style: { fontSize: '48px', marginBottom: '15px' } }, '🧩'),
                        React.createElement('h1', {
                            style: { margin: '0 0 15px 0', color: '#1f2937', fontSize: '26px', fontWeight: 'bold' }
                        }, 'Ласкаво просимо!'),
                        React.createElement('p', {
                            style: { margin: '0 0 20px 0', color: '#4b5563', fontSize: '16px', lineHeight: '1.6' }
                        }, 'Щоб грати в React Sudoku, нам потрібно зберігати ваш прогрес та налаштування локально на вашому пристрої.'),
                        React.createElement('p', {
                            style: { margin: '0', color: '#6b7280', fontSize: '14px', fontWeight: 'bold' }
                        }, 'Будь ласка, надайте згоду на банері знизу 👇')
                    )
                )
            ),

            // Оновлений банер (трохи покращив стилі кнопки)
            React.createElement(CookieConsent, {
                    location: "bottom",
                    buttonText: "Зрозумів, приймаю",
                    cookieName: "sudoku_gdpr_consent",
                    style: { background: "#1f2937", alignItems: "center", padding: "10px 20px" },
                    buttonStyle: { background: "#f59e0b", color: "#ffffff", fontSize: "15px", fontWeight: "bold", borderRadius: "8px", padding: "10px 20px", cursor: "pointer" },
                    expires: 150,
                    onAccept: () => {
                        setHasConsent(true);
                    }
                },
                "Цей веб-сайт використовує локальне сховище (Local Storage) для збереження ваших ігрових налаштувань та прогресу згідно з GDPR. ",
                React.createElement('a', {
                    href: "/PRIVACY_POLICY.md",
                    target: "_blank",
                    rel: "noreferrer",
                    style: { color: "#60a5fa", textDecoration: "none", fontWeight: "bold", marginLeft: "5px" }
                }, "Дізнатися більше")
            )
        )
    );
}

export default App;