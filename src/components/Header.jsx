import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        React.createElement('header', { className: styles.header },
            React.createElement('div', { className: styles.logo }, 'Sudoku Labs')
        )
    );
}

export default Header;