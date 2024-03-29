import { create } from "zustand";
import type { Dictionary, Project } from "../types/dictionary";
import spanish from "../dictionaries/es.json";

interface LanguageState {
  language: string;
  data: Dictionary;
  setLanguage: (value: string) => void;
  setData: (value: Dictionary) => void;
}

export const useLanguageStore = create<LanguageState>((set, get) => ({
  language: "ES",
  data: {
    ...spanish,
    projects: spanish.projects.map((project: any) => ({
      ...project
    })) as Project[]
  },
  setLanguage: (value: string) =>
    set((state: LanguageState) => ({ ...state, language: value })),
  setData: (value: Dictionary) =>
    set((state: LanguageState) => ({ ...state, data: value }))
}));
