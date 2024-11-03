export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.accessToken;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsError = (state) => state.auth.error;

