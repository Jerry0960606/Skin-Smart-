import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language } from '@/i18n/translations';

export type Gender = 'boy' | 'girl' | null;
export type SkinType = 'dry' | 'oily' | 'combination' | 'normal' | 'sensitive' | null;
export type ResultType = 'green' | 'yellow' | 'red' | null;

export interface QuizAnswer {
  questionId: number;
  answer: number;
}

export interface ScanRecord {
  id: string;
  date: string;
  productName: string;
  result: ResultType;
  skinType: SkinType;
  safetyScore: number;
  matchScore: number;
  imageUrl?: string;
  ingredients: string[];
}

interface AppState {
  // Language
  language: Language;
  setLanguage: (lang: Language) => void;

  // Auth
  isAuthenticated: boolean;
  setIsAuthenticated: (status: boolean) => void;

  // User Info
  gender: Gender;
  setGender: (gender: Gender) => void;

  // Quiz
  quizAnswers: QuizAnswer[];
  setQuizAnswer: (questionId: number, answer: number) => void;
  resetQuiz: () => void;

  // Skin Type (calculated from quiz)
  skinType: SkinType;
  calculateSkinType: () => void;

  // Scan
  currentProduct: string | null;
  setCurrentProduct: (product: string | null) => void;
  scanType: 'barcode' | 'ingredients';
  setScanType: (type: 'barcode' | 'ingredients') => void;

  // Result
  currentResult: ResultType;
  setCurrentResult: (result: ResultType) => void;

  // History
  scanHistory: ScanRecord[];
  addToHistory: (record: Omit<ScanRecord, 'id' | 'date'>) => void;
  deleteFromHistory: (id: string) => void;
  clearHistory: () => void;

  // Blacklist
  blacklist: string[];
  addToBlacklist: (ingredient: string) => void;
  removeFromBlacklist: (ingredient: string) => void;

  // Comparison
  selectedComparisonIds: string[];
  toggleComparisonSelection: (id: string) => void;
  clearComparisonSelection: () => void;

  // Navigation
  currentPage: 'cover' | 'reminder' | 'gender' | 'quiz' | 'scan' | 'manual-input' | 'login' | 'analyzing' | 'result' | 'report' | 'history' | 'help' | 'about' | 'settings' | 'comparison' | 'wiki';
  setCurrentPage: (page: 'cover' | 'reminder' | 'gender' | 'quiz' | 'scan' | 'manual-input' | 'login' | 'analyzing' | 'result' | 'report' | 'history' | 'help' | 'about' | 'settings' | 'comparison' | 'wiki') => void;

  // Menu
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setMenuOpen: (open: boolean) => void;

  // Reset all
  resetAll: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Language
      language: 'zh-TW',
      setLanguage: (lang) => set({ language: lang }),

      // Auth
      isAuthenticated: false,
      setIsAuthenticated: (status) => set({ isAuthenticated: status }),

      // User Info
      gender: null,
      setGender: (gender) => set({ gender }),

      // Quiz
      quizAnswers: [],
      setQuizAnswer: (questionId, answer) => {
        const current = get().quizAnswers;
        const existing = current.find(a => a.questionId === questionId);
        if (existing) {
          set({
            quizAnswers: current.map(a =>
              a.questionId === questionId ? { questionId, answer } : a
            )
          });
        } else {
          set({ quizAnswers: [...current, { questionId, answer }] });
        }
      },
      resetQuiz: () => set({ quizAnswers: [], skinType: null }),

      // Skin Type
      skinType: null,
      calculateSkinType: () => {
        const answers = get().quizAnswers;
        if (answers.length < 10) return;

        // Simple algorithm to determine skin type based on answers
        const q1 = answers.find(a => a.questionId === 1)?.answer || 0;
        const q2 = answers.find(a => a.questionId === 2)?.answer || 0;
        const q5 = answers.find(a => a.questionId === 5)?.answer || 0;
        const q7 = answers.find(a => a.questionId === 7)?.answer || 0;

        let skinType: SkinType = 'normal';

        // Determine based on key questions
        if (q5 === 0 || q5 === 1) {
          skinType = 'sensitive';
        } else if (q1 === 1 || q7 === 2) {
          skinType = 'oily';
        } else if (q1 === 0) {
          skinType = 'dry';
        } else if (q1 === 2 || (q2 === 1 && q7 === 1)) {
          skinType = 'combination';
        }

        set({ skinType });
      },

      // Scan
      currentProduct: null,
      setCurrentProduct: (product) => set({ currentProduct: product }),
      scanType: 'barcode',
      setScanType: (type) => set({ scanType: type }),

      // Result
      currentResult: null,
      setCurrentResult: (result) => set({ currentResult: result }),

      // History
      scanHistory: [],
      addToHistory: (record) => {
        if (!get().isAuthenticated) return;

        const newRecord: ScanRecord = {
          ...record,
          id: Date.now().toString(),
          date: new Date().toISOString(),
        };
        set({ scanHistory: [newRecord, ...get().scanHistory] });
      },
      deleteFromHistory: (id) => {
        set({ scanHistory: get().scanHistory.filter(r => r.id !== id) });
      },
      clearHistory: () => set({ scanHistory: [] }),

      // Blacklist
      blacklist: [],
      addToBlacklist: (ingredient) => {
        if (!get().blacklist.includes(ingredient)) {
          set({ blacklist: [...get().blacklist, ingredient] });
        }
      },
      removeFromBlacklist: (ingredient) => {
        set({ blacklist: get().blacklist.filter(i => i !== ingredient) });
      },

      // Comparison
      selectedComparisonIds: [],
      toggleComparisonSelection: (id) => {
        const current = get().selectedComparisonIds;
        if (current.includes(id)) {
          set({ selectedComparisonIds: current.filter(i => i !== id) });
        } else {
          // Limit to 2 for side-by-side comparison
          if (current.length < 2) {
            set({ selectedComparisonIds: [...current, id] });
          }
        }
      },
      clearComparisonSelection: () => set({ selectedComparisonIds: [] }),

      // Navigation
      currentPage: 'cover',
      setCurrentPage: (page) => set({ currentPage: page }),

      // Menu
      isMenuOpen: false,
      toggleMenu: () => set({ isMenuOpen: !get().isMenuOpen }),
      setMenuOpen: (open) => set({ isMenuOpen: open }),

      // Reset all
      resetAll: () => set({
        gender: null,
        quizAnswers: [],
        skinType: null,
        currentProduct: null,
        currentResult: null,
        selectedComparisonIds: [],
      }),
    }),
    {
      name: 'smart-buy-safe-skin',
      partialize: (state) => ({
        language: state.language,
        scanHistory: state.scanHistory,
        blacklist: state.blacklist,
        isAuthenticated: state.isAuthenticated,
        skinType: state.skinType,
        gender: state.gender,
      }),
    }
  )
);

