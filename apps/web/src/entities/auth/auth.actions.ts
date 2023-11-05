import { createAsyncThunk } from '@reduxjs/toolkit';

import { MessengerApi } from '@messenger/frontend-shared/backend-types/MessengerApi.ts';

import { fetchLogin, fetchLogout, fetchRefresh, fetchRegister } from '~/shared/service/fetchers/fetchAuth.ts';

const login = createAsyncThunk(
  'auth/login',
  async (userData: MessengerApi.LoginDto, thunkAPI) =>
    await fetchLogin(userData).catch((e) => thunkAPI.rejectWithValue(e?.message)),
);

const register = createAsyncThunk(
  'auth/register',
  async (userData: MessengerApi.CreateUserDto, thunkAPI) =>
    await fetchRegister(userData).catch((e) => thunkAPI.rejectWithValue(e?.message)),
);

const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => await fetchRefresh().catch((e) => thunkAPI.rejectWithValue(e?.message)),
);

const logout = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => await fetchLogout().catch((e) => thunkAPI.rejectWithValue(e?.message)),
);

export const extraAuthAction = {
  login,
  refresh,
  register,
  logout,
};
