import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return React.createElement('button', {
        className: styles.btn,
        onClick: props.onClick,
        type: props.type || 'button',
        disabled: props.disabled
    }, props.children);
}

export default Button;