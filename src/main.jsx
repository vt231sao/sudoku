import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import { SettingsProvider } from './context/SettingsContext';

createRoot(document.getElementById('root')).render(
    React.createElement(SettingsProvider, null,
        React.createElement(App, null)
    )
);