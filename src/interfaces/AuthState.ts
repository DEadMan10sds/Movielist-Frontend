export interface AuthState {
  isAuthenticated: boolean;
  user: object | null;
  token: string | null;
}
