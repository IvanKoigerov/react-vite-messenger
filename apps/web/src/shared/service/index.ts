import { Taxios } from '@simplesmiler/taxios';
import Axios, { AxiosError } from 'axios';

import { MessengerApi } from '@messenger/frontend-shared/backend-types/MessengerApi.ts';

export function isAxiosError<ResponseType>(error: unknown): error is AxiosError<ResponseType> {
  return Axios.isAxiosError(error);
}

export const axios = Axios.create({
  // @NOTE: Put base config here
  baseURL: '/api',
  withCredentials: true,
});

export const taxios = new Taxios<MessengerApi>(axios);
