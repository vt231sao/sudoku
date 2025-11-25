import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

function Modal(props) {
    const [modalRootNode] = useState(() => {
        let node = document.getElementById('modal-root');
        if (!node) {
            node = document.body;
        }
        return node;
    });

    const [el] = useState(() => document.createElement('div'));

    useEffect(() => {
        modalRootNode.appendChild(el);

        return () => {
            modalRootNode.removeChild(el);
        };
    }, [el, modalRootNode]);

    const modalContent = React.createElement('div', { className: styles.overlay },
        React.createElement('div', { className: styles.content },
            props.children
        )
    );

    return ReactDOM.createPortal(modalContent, el);
}

export default Modal;