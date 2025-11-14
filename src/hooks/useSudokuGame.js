import { useState, useEffect, useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';
import { generateSudoku, checkSolution } from '../utils/sudokuLogic';
import { useTimer } from './useTimer';

const MISTAKE_LIMIT = 3;

function createEmptyGrid() {
    return Array(9).fill(null).map(() => Array(9).fill(null));
}

export function useSudokuGame() {
    const { difficulty } = useContext(SettingsContext);
    const { time, stopTimer } = useTimer(true);

    const [initialBoard, setInitialBoard] = useState(createEmptyGrid());
    const [solvedBoard, setSolvedBoard] = useState(createEmptyGrid());
    const [board, setBoard] = useState(createEmptyGrid());
    const [errors, setErrors] = useState(createEmptyGrid());

    const [selectedCell, setSelectedCell] = useState(null);
    const [mistakes, setMistakes] = useState(0);
    const [isWin, setIsWin] = useState(false);
    const [isLose, setIsLose] = useState(false);

    useEffect(() => {
        const { initial, solved } = generateSudoku(difficulty);
        setInitialBoard(initial);
        setSolvedBoard(solved);
        setBoard(initial);
    }, [difficulty]);

    function selectCell(row, col) {
        setSelectedCell({ row, col });
    }

    function handleInput(value) {
        if (!selectedCell || isWin || isLose) return;

        const { row, col } = selectedCell;

        if (initialBoard[row][col] !== null) {
            return;
        }

        const newBoard = board.map(r => [...r]);
        newBoard[row][col] = value;
        setBoard(newBoard);

        const newErrors = errors.map(r => [...r]);
        let isError = false;

        if (value !== null && value !== solvedBoard[row][col]) {
            isError = true;
            newErrors[row][col] = true;
            if (board[row][col] !== value) {
                setMistakes(m => m + 1);
            }
        } else {
            newErrors[row][col] = null;
        }
        setErrors(newErrors);

        const currentMistakes = mistakes + (isError && board[row][col] !== value ? 1 : 0);

        if (currentMistakes >= MISTAKE_LIMIT) {
            stopTimer();
            setIsLose(true);
            setSelectedCell(null);
            return;
        }

        if (checkSolution(newBoard, solvedBoard)) {
            stopTimer();
            setIsWin(true);
            setSelectedCell(null);
        }
    }

    return {
        board,
        initialBoard,
        solvedBoard,
        errors,
        selectedCell,
        mistakes,
        time,
        isWin,
        isLose,
        selectCell,
        handleInput
    };
}