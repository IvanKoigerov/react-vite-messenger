import { PayloadAction } from '@reduxjs/toolkit';

import { AnyObjectWithError } from '~/shared/helper/typesHelper.ts';

export const setReduxErrorInState = <T extends object>(
  state: AnyObjectWithError<T>,
  action: PayloadAction<unknown>,
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const setReduxIsLoadingInState = <T extends object>(state: AnyObjectWithError<T>) => {
  state.isLoading = true;
};
