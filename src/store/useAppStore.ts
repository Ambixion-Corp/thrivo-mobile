import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

// @ts-ignore
const storage = new MMKV();

const zustandStorage = {
  setItem: (name: string, value: string) => {
    return storage.set(name, value);
  },
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name: string) => {
    return storage.delete(name);
  },
};

interface AppState {
  hasOnboarded: boolean;
  theme: 'dark' | 'light';
  activeCategory: string;
  setOnboarded: (value: boolean) => void;
  setTheme: (theme: 'dark' | 'light') => void;
  setActiveCategory: (category: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      hasOnboarded: false,
      theme: 'dark',
      activeCategory: 'All',
      setOnboarded: (value) => set({ hasOnboarded: value }),
      setTheme: (theme) => set({ theme }),
      setActiveCategory: (category) => set({ activeCategory: category }),
    }),
    {
      name: 'thrivo-app-storage',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
