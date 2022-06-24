import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null,
    },
    reducers: {
        login(state, action) {
            console.log(action.payload);
            state.token = action.payload.token;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('expirationTime', action.payload.expTime);
        },
        logout(state, action) {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
            localStorage.removeItem('expirationTime');

        },
    }
});

export const authActions = authSlice.actions;

export default authSlice;