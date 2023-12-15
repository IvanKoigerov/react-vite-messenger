import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { extraAuthAction } from '~/entities/auth/auth.actions.ts';
import { authInitialState } from '~/entities/auth/auth.initial.ts';
import { AuthStore, AuthType } from '~/entities/auth/auth.types.ts';
import { setReduxErrorInState, setReduxIsLoadingInState } from '~/shared/helper/reduxHelper.ts';

const { refresh, register, logout, login } = extraAuthAction;

const setAuthState = (state: AuthStore, action: PayloadAction<AuthType>) => {
  state.isLoading = false;
  state.error = null;
  state.accessToken = action.payload?.accessToken;
  state.refreshToken = action.payload?.refreshToken;
  state.user = action.payload?.user;
  state.isAuth = true;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: {
    [login.pending.type]: setReduxIsLoadingInState,
    [login.fulfilled.type]: setAuthState,
    [login.rejected.type]: setReduxErrorInState,

    [register.pending.type]: setReduxIsLoadingInState,
    [register.fulfilled.type]: setAuthState,
    [register.rejected.type]: setReduxErrorInState,

    [logout.pending.type]: setReduxIsLoadingInState,
    [logout.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.refreshToken = null;
      state.accessToken = null;
      state.user = null;
      state.error = null;
      state.isAuth = false;
    },
    [logout.rejected.type]: setReduxErrorInState,

    [refresh.pending.type]: setReduxIsLoadingInState,
    [refresh.fulfilled.type]: setAuthState,
    [refresh.rejected.type]: (state, action: PayloadAction<unknown>) => {
      setReduxErrorInState(state, action);
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
