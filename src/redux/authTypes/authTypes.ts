// authTypes.ts
export interface User {
    name: string;
    email: string;
  }
  
  export interface AuthState {
    user: User;
    token: string | null;
    isLoggedIn: boolean;
    isRefreshing: boolean;
  }
  