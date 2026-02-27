/**
 * @module Store/Settings
 * @description Zustand стейт-менеджер для управління налаштуваннями гри. Дані автоматично кешуються в Local Storage браузера.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * @typedef {Object} SettingsState
 * @property {string} username - Ім'я поточного гравця.
 * @property {('easy'|'medium'|'hard')} difficulty - Обраний рівень складності гри.
 * @property {function(string): void} setUsername - Екшн для оновлення імені гравця.
 * @property {function(('easy'|'medium'|'hard')): void} setDifficulty - Екшн для зміни рівня складності.
 */

/**
 * Хук для доступу та зміни налаштувань гри.
 * @type {import('zustand').UseBoundStore<import('zustand').StoreApi<SettingsState>>}
 */
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