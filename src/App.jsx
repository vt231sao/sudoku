import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';

function App() {
    return (
        React.createElement(Routes, null,
            React.createElement(Route, { path: '/', element: React.createElement(Layout, null) },
                React.createElement(Route, { index: true, element: React.createElement(StartPage, null) }),
                React.createElement(Route, { path: 'game/:userId', element: React.createElement(GamePage, null) })
            )
        )
    );
}

export default App;