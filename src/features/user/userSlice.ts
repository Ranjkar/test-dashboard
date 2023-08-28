
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{username: string, password: string}>) => {
        console.log("state",state)
      const { username, password } = action.payload;
      if (username === 'admin' && password === 'admin') {
        state.isAuthenticated = true;
        state.user = {
          name: 'Sam Demo',
          email: 'sam.demo@example.com',
          phoneNumber: '123-456-7890',
          address: 'Main 1024  St, City, Country',
        };
        state.error = null;
      } else {
        state.error = 'Incorrect username or password.';
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectIsAuthenticated = (state: { user: UserState }) => state.user.isAuthenticated;
export const selectError = (state: { user: UserState }) => state.user.error;

export default userSlice.reducer;
