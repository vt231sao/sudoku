import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

function Layout() {
    return (
        React.createElement('div', { className: styles.appWrapper },
            React.createElement(Header, null),
            React.createElement('main', { className: styles.container },
                React.createElement(Outlet, null)
            ),
            React.createElement(Footer, null)
        )
    );
}

export default Layout;