import { createReducer } from "@reduxjs/toolkit";

import { login, logout } from "../actions/authActions";

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  username: null,
  token: null,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload.username;
      state.token = action.payload.token;
    })
    .addCase(logout, (state) => {
      state.isAuthenticated = false;
      state.username = "test";
      state.token = null;
    });
});
