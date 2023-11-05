import { AuthStore } from '~/entities/auth/auth.types.ts';

export const authInitialState: AuthStore = {
  accessToken: null,
  refreshToken: null,
  isLoading: null,
  error: null,
  user: null,
  isAuth: null,
};
