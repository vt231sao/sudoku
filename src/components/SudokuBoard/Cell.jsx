import React from 'react';

function Cell(props) {
    const display = props.value == null ? '' : String(props.value);

    let className = 'sudoku-cell';
    if (props.isFixed) {
        className += ' fixed';
    }
    if (props.isActive) {
        className += ' active';
    }

    function handleClick() {
        props.onClick(props.row, props.col);
    }

    return React.createElement('div', {
        className: className,
        role: 'gridcell',
        'data-row': props.row,
        'data-col': props.col,
        onClick: handleClick,
        tabIndex: 0
    }, display);
}

export default Cell;
