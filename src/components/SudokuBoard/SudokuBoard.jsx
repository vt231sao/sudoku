import React from 'react';
import Cell from './Cell';

function makeIndexArray(n) {
    var arr = Array.from({ length: n }, function (_, i) { return i; });
    return arr;
}

function SudokuBoard(props) {
    const rows = makeIndexArray(9);
    const cols = makeIndexArray(9);

    function renderRow(r) {
        return React.createElement('div', { key: r, className: 'sudoku-row' },
            cols.map(function (c) {
                const value = props.board[r][c];
                const isFixed = props.initialBoard[r][c] !== null;
                const isActive = props.selectedCell ? (props.selectedCell.row === r && props.selectedCell.col === c) : false;
                const isError = props.errors[r][c] === true;

                return React.createElement(Cell, {
                    key: r + '-' + c,
                    row: r,
                    col: c,
                    value: value,
                    isFixed: isFixed,
                    isActive: isActive,
                    isError: isError,
                    onClick: props.onCellClick
                });
            })
        );
    }

    return React.createElement('div', { className: 'sudoku-board', role: 'grid', 'aria-label': 'Sudoku board' },
        rows.map(function (r) {
            return renderRow(r);
        })
    );
}

export default SudokuBoard;