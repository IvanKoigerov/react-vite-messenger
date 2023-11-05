import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from '~/entities/auth';

const rootReducer = combineReducers({
  authReducer,
});

export const setupStore = () => {
  return configureStore({
    devTools: true,
    reducer: rootReducer,
  });
};

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
