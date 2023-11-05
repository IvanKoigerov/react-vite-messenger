import { authReducer } from '~/entities/auth/auth.reducer.ts';

export { authActions } from '~/entities/auth/auth.reducer.ts';
export { extraAuthAction } from '~/entities/auth/auth.actions.ts';
export type { AuthStore } from '~/entities/auth/auth.types.ts';

export default authReducer;
