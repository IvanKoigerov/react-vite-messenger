import { MessengerApi } from '@messenger/frontend-shared/backend-types/MessengerApi.ts';

import { Nullable } from '~/shared/helper/typesHelper.ts';

export interface AuthStore extends Nullable<MessengerApi.LoginReturnDto> {
  isLoading?: boolean | null;
  error: unknown;
  isAuth: boolean | null;
}

export type AuthType = Nullable<MessengerApi.LoginReturnDto>;
