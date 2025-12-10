import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSettingsStore = create(
    persist(
        (set) => ({
            username: '',
            difficulty: 'medium',
            setUsername: (name) => set({ username: name }),
            setDifficulty: (diff) => set({ difficulty: diff }),
        }),
        {
            name: 'sudoku-settings-storage',
        }
    )
);