import { Taxios } from '@simplesmiler/taxios';
import Axios, { AxiosError } from 'axios';

import { MessengerApi } from '@messenger/frontend-shared/backend-types/MessengerApi.ts';

import { reduxStore } from '~/app/App.tsx';

export function isAxiosError<ResponseType>(error: unknown): error is AxiosError<ResponseType> {
  return Axios.isAxiosError(error);
}

export const axios = Axios.create({
  // @NOTE: Put base config here
  baseURL: 'http://localhost:3001',
  withCredentials: true,
});

export const taxios = new Taxios<MessengerApi>(axios);

axios.interceptors.request.use((config) => {
  const state = reduxStore.getState();
  const accessToken = state.authReducer.accessToken;

  if (!accessToken) return config;

  config.headers!.Authorization = `Bearer ${accessToken}`;
  return config;
});
