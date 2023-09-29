const initialState: AuthState = {
  isAuthenticated: false,
  currentUser: null,
  token: null,
  error: null,
};
// Async Thunks
export const signUp = createAsyncThunk('auth/signUp', async (userData: any) => {
  const response = await api.signUp(userData);
  return response.data;
});
export const login = createAsyncThunk('auth/login', async (userData: any) => {
  const response = await api.login(userData);
  const token = response.data.token; // Assuming the token is returned in the 'token' field of the response
  // Store the token in local storage
  localStorage.setItem('token', token);
  // Debugging line to check if the token is stored correctly
  // console.log("Stored Token:", localStorage.getItem('token'));
  // let bob = parseJwt(token);
  return response.data;
});
export function parseJwt(token: string) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  return JSON.parse(jsonPayload);
}
export const asyncLogout = createAsyncThunk('auth/logout', async () => {
  const response = await api.logout();
  localStorage.clear(); // Clear local storage
  return response.data;
});
// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state: AuthState) {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.error = null;
      localStorage.clear();
    },
    clearError(state: AuthState) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        signUp.fulfilled,
        (state: AuthState, action: PayloadAction<any>) => {
          state.isAuthenticated = true;
          state.currentUser = action.payload.username;
          state.error = null;
        }
      )
      .addCase(
        login.fulfilled,
        (state: AuthState, action: PayloadAction<any>) => {
          state.isAuthenticated = true;
          let bob = parseJwt(action.payload.token);
          state.currentUser = bob.username;
          state.token = action.payload.token;
          state.error = null;
        }
      )
      .addCase(asyncLogout.fulfilled, (state: AuthState) => {
        state.isAuthenticated = false;
        state.currentUser = null;
        state.error = null;
      })
      .addCase(login.rejected, (state: AuthState, action) => {
        // Correctly access the error message here
        state.error = action.error.message
          ? action.error.message
          : 'Invalid credentials';
      });
  },
});
export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
