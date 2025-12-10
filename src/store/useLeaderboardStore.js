import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLeaderboardStore = create(
    persist(
        (set) => ({
            scores: [],
            addScore: (newScore) => set((state) => {
                const updatedScores = [...state.scores, { ...newScore, date: new Date().toISOString() }];
                return {
                    scores: updatedScores.sort((a, b) => b.score - a.score).slice(0, 20)
                };
            }),
        }),
        {
            name: 'sudoku-leaderboard-storage',
        }
    )
);