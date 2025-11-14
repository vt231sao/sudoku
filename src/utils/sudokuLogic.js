function getSolvedBoard() {
    return [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
}

function getPuzzle(difficulty) {
    const solved = getSolvedBoard();
    const initial = solved.map(row => [...row]);

    let holes = 30;
    if (difficulty === 'easy') {
        holes = 20;
    } else if (difficulty === 'hard') {
        holes = 45;
    }

    let attempts = holes;
    while (attempts > 0) {
        const r = Math.floor(Math.random() * 9);
        const c = Math.floor(Math.random() * 9);
        if (initial[r][c] !== null) {
            initial[r][c] = null;
            attempts--;
        }
    }

    return { initial, solved };
}

export function generateSudoku(difficulty) {
    return getPuzzle(difficulty);
}

export function checkSolution(board, solvedBoard) {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === null || board[r][c] !== solvedBoard[r][c]) {
                return false;
            }
        }
    }
    return true;
}