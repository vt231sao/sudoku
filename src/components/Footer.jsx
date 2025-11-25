import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        React.createElement('footer', { className: styles.footer },
            React.createElement('small', null, 'Cудоку 2025')
        )
    );
}

export default Footer;