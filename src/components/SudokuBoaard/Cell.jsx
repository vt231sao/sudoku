import React from 'react';

function Cell(props) {
    const display = props.value == null ? '' : String(props.value);

    return React.createElement('div', {
        className: 'sudoku-cell',
        role: 'gridcell',
        'data-row': props.row,
        'data-col': props.col
    }, display);
}

export default Cell;
