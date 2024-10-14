// authTypes.ts
export interface User {
  name: string;
  email: string;
}

export interface AuthState {
  user: User;
  accessToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: String;
}
