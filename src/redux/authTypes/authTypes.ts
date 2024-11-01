// authTypes.ts
export interface User {
  name: string;
  email: null | string;
}

export interface AuthState {
  user: User;
  accessToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}
