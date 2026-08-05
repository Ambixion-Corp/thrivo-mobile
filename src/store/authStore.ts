import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';
import { API_ROUTES } from '../config/api';

// @ts-ignore
const storage = new MMKV();

const MMKVStorage = {
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

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'founder' | 'investor' | 'creator' | 'consumer';
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, role: User['role'], name?: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      login: async (email, password) => {
        const response = await fetch(API_ROUTES.login, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Login failed');
        }

        set({
          isAuthenticated: true,
          user: data.user,
          token: data.token,
        });
      },
      signup: async (email, password, role, name) => {
        const response = await fetch(API_ROUTES.signup, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, role, name }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Signup failed');
        }

        set({
          isAuthenticated: true,
          user: data.user,
          token: data.token,
        });
      },
      logout: () => set({ isAuthenticated: false, user: null, token: null }),
    }),
    {
      name: 'thrivo-auth-storage',
      storage: createJSONStorage(() => MMKVStorage),
    }
  )
);
