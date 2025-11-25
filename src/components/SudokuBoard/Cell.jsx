import React from 'react';
import styles from './SudokuBoard.module.css';

function Cell(props) {
    const display = props.value == null ? '' : String(props.value);

    const classNames = [styles.cell];
    if (props.isFixed) classNames.push(styles.fixed);
    if (props.isActive) classNames.push(styles.active);
    if (props.isError) classNames.push(styles.error);

    function handleClick() {
        if (!props.isFixed) {
            props.onClick(props.row, props.col);
        }
    }

    return React.createElement('div', {
        className: classNames.join(' '),
        role: 'gridcell',
        'data-row': props.row,
        'data-col': props.col,
        onClick: handleClick,
        tabIndex: props.isFixed ? -1 : 0
    }, display);
}

export default Cell;