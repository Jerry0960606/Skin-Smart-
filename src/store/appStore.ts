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

export interface SkinProfile {
  type: SkinType;
  oiliness: number; // 0-100
  sensitivity: number; // 0-3
  acneProne: boolean;
  sunSensitive: boolean;
  barrierHealth: number; // 0-3
  concerns: string[];
}

export interface ScanRecord {
  id: string;
  date: string;
  productName: string;
  result: ResultType;
  skinType: SkinType;
  skinProfile?: SkinProfile;
  safetyScore: number;
  matchScore: number;
  imageUrl?: string;
  ingredients: string[];
  safetyExplanation?: string;
  matchExplanation?: string;
}

export interface ContributedProduct {
  barcode: string;
  name: string;
  ingredients: string[];
  imageUrl?: string;
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
  skinType: SkinType | null;
  skinProfile: SkinProfile | null;
  calculateSkinType: () => void;

  // Scan
  currentProduct: string | null;
  setCurrentProduct: (product: string | null) => void;
  manualProductName: string | null;
  setManualProductName: (name: string | null) => void;
  manualProductImage: string | null;
  setManualProductImage: (image: string | null) => void;
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
  bulkDeleteFromHistory: (ids: string[]) => void;

  // My Cosmetics
  myCosmetics: ScanRecord[];
  addToMyCosmetics: (record: Omit<ScanRecord, 'id' | 'date'>) => void;
  deleteFromMyCosmetics: (id: string) => void;
  bulkDeleteFromMyCosmetics: (ids: string[]) => void;
  clearMyCosmetics: () => void;

  // Contributed Products (Simulated Database)
  contributedProducts: ContributedProduct[];
  addContributedProduct: (product: ContributedProduct) => void;

  // Blacklist
  blacklist: string[];
  addToBlacklist: (ingredient: string) => void;
  removeFromBlacklist: (ingredient: string) => void;

  // Comparison
  selectedComparisonIds: string[];
  toggleComparisonSelection: (id: string) => void;
  clearComparisonSelection: () => void;

  // Navigation
  currentPage: 'cover' | 'reminder' | 'gender' | 'quiz' | 'scan' | 'manual-input' | 'login' | 'analyzing' | 'result' | 'report' | 'history' | 'cosmetics' | 'help' | 'about' | 'label-info' | 'settings' | 'comparison' | 'wiki' | 'skin-analysis-result';
  setCurrentPage: (page: 'cover' | 'reminder' | 'gender' | 'quiz' | 'scan' | 'manual-input' | 'login' | 'analyzing' | 'result' | 'report' | 'history' | 'cosmetics' | 'help' | 'about' | 'label-info' | 'settings' | 'comparison' | 'wiki' | 'skin-analysis-result') => void;

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
      language: 'en',
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

      // Skin Type & Profile
      skinType: null,
      skinProfile: null,
      calculateSkinType: () => {
        const answers = get().quizAnswers;
        console.log("Calculating skin type with answers:", answers.length);

        const getA = (id: number) => answers.find(a => a.questionId === id)?.answer || 0;

        // Q1 (Feel): Dry(0), Oily(1), Combo(2), Normal(3)
        // Q5 (Reaction): Allergic(0), Sting(1), Fine(2), Never(3)
        // Q3 (Acne): Rarely(0), Occasional(1), Frequent(2), Very Frequent(3)
        // Q4 (Sun): Burn(0), Tan(1), Burn/Tan(2), Nothing(3)
        // Q6 (Texture): Smooth(0), Rough(1), Obviously Rough(2), Peeling(3)
        // Q8 (Cheeks): Normal(0), Dry(1), Red/Peeling(2), Bumps(3)

        const oiliness = getA(1) === 1 ? 80 : getA(1) === 2 ? 60 : 30;
        const sensitivity = 3 - getA(5); // 0 (Never) to 3 (Often)
        const acneProne = getA(3) >= 2 || getA(10) === 0;
        const sunSensitive = getA(4) === 0;
        
        // Barrier Health (Q6 Texture, Q8 Cheeks)
        const barrierHealth = Math.max(0, 3 - (getA(6) + (getA(8) >= 2 ? 2 : 0)) / 2);

        let type: SkinType = 'normal';
        if (sensitivity >= 2) type = 'sensitive';
        else if (oiliness >= 70) type = 'oily';
        else if (oiliness <= 35) type = 'dry';
        else if (getA(1) === 2) type = 'combination';

        const concerns = [];
        if (getA(10) === 0) concerns.push('acne');
        if (getA(10) === 1) concerns.push('dullness');
        if (getA(10) === 2) concerns.push('texture');
        if (getA(10) === 3) concerns.push('sensitivity');

        const profile: SkinProfile = {
          type,
          oiliness,
          sensitivity,
          acneProne,
          sunSensitive,
          barrierHealth,
          concerns
        };

        set({ skinType: type, skinProfile: profile });
      },

      // Scan
      currentProduct: null,
      setCurrentProduct: (product) => set({ currentProduct: product }),
      manualProductName: null,
      setManualProductName: (name) => set({ manualProductName: name }),
      manualProductImage: null,
      setManualProductImage: (image) => set({ manualProductImage: image }),
      scanType: 'barcode',
      setScanType: (type) => set({ scanType: type }),

      // Result
      currentResult: null,
      setCurrentResult: (result) => set({ currentResult: result }),

      // History
      scanHistory: [],
      addToHistory: (record) => {
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
      bulkDeleteFromHistory: (ids) => {
        set({ scanHistory: get().scanHistory.filter(r => !ids.includes(r.id)) });
      },

      // My Cosmetics
      myCosmetics: [],
      addToMyCosmetics: (record) => {
        const newRecord: ScanRecord = {
          ...record,
          id: Date.now().toString(),
          date: new Date().toISOString(),
        };
        set({ myCosmetics: [newRecord, ...get().myCosmetics] });
      },
      deleteFromMyCosmetics: (id) => {
        set({ myCosmetics: get().myCosmetics.filter(r => r.id !== id) });
      },
      bulkDeleteFromMyCosmetics: (ids) => {
        set({ myCosmetics: get().myCosmetics.filter(r => !ids.includes(r.id)) });
      },
      clearMyCosmetics: () => set({ myCosmetics: [] }),

      // Contributed Products
      contributedProducts: [],
      addContributedProduct: (product: ContributedProduct) => {
        set({ contributedProducts: [product, ...get().contributedProducts] });
      },

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
      name: 'smart-buy-safe-skin-v2',
      version: 1,
      migrate: (persistedState: any, version: number) => {
        if (version === 0) {
          // Force language to English for migration from older versions
          return { ...persistedState, language: 'en' };
        }
        return persistedState;
      },
      partialize: (state) => ({
        language: state.language,
        scanHistory: state.scanHistory,
        myCosmetics: state.myCosmetics,
        blacklist: state.blacklist,
        isAuthenticated: state.isAuthenticated,
        skinType: state.skinType,
        gender: state.gender,
        quizAnswers: state.quizAnswers,
        contributedProducts: state.contributedProducts,
      }),
    }
  )
);

