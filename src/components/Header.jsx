import React from 'react';

function Header() {
    return (
        React.createElement('header', { className: 'header' },
            React.createElement('div', { className: 'logo' }, 'Sudoku Labs')
        )
    );
}

export default Header;
