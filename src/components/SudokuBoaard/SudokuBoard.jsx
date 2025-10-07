import React from 'react';
import Cell from './Cell';

function makeIndexArray(n) {
    var arr = Array.from({ length: n }, function (_, i) { return i; });
    return arr;
}

function SudokuBoard() {
    const rows = makeIndexArray(9);
    const cols = makeIndexArray(9);

    function renderRow(r) {
        return React.createElement('div', { key: r, className: 'sudoku-row' },
            cols.map(function (c) {
                return React.createElement(Cell, { key: r + '-' + c, row: r, col: c, value: null });
            })
        );
    }

    return React.createElement('div', { className: 'sudoku-board', role: 'grid', 'aria-label': 'Sudoku board placeholder' },
        rows.map(function (r) {
            return renderRow(r);
        })
    );
}

export default SudokuBoard;
