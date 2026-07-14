import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'founder' | 'investor' | 'creator' | 'consumer';
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, role: User['role']) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (email, role) => set({ 
    isAuthenticated: true, 
    user: { id: 'user_1', name: 'Mock User', email, role } 
  }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
