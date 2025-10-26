import { create } from "zustand";

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  const storedToken = typeof localStorage !== "undefined" ? localStorage.getItem("token") : null;
  const storedUser = typeof localStorage !== "undefined" ? localStorage.getItem("user") : null;

  return {
    user: storedUser ? (JSON.parse(storedUser) as User) : null,
    token: storedToken,
    login: (user, token) => {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      set({ user, token });
    },
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      set({ user: null, token: null });
    },
  };
});
