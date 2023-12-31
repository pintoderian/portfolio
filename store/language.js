import { create } from 'zustand';
import dataES from '@/data/languages/es';

export const useLanguageStore = create((set, get) => ({
  language: 'EN',
  data: dataES,
  setLanguage: (value) => set((state) => ({ ...state, language: value })),
  setData: (value) => set((state) => ({ ...state, data: value }))
}));
