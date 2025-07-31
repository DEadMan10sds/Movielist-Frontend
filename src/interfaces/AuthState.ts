export type User = {
  id: number;
  name: string;
  role: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
};
