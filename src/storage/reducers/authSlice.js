import { createSlice } from '@reduxjs/toolkit';

import {
    registration,
    login,
    logout,
    refreshUser,
} from '../operations/authThunk';

const initialState = {
    userData: null,
    authenticated: false,
    token: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registration.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.authenticated = true;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.authenticated = true;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
                state.authenticated = false;
                state.userData = null;
                state.token = null;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.authenticated = true;
                state.userData = action.payload;
            })
    },
});

export const authReducer = authSlice.reducer;