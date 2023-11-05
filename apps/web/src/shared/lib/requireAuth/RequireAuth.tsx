import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { APP_ROUTES } from '~/app/providers/AppRouters/routes.const.ts';

interface RequireAuthProps extends PropsWithChildren {
  isAuth?: boolean | null;
}

const RequireAuth = ({ children, isAuth }: RequireAuthProps) => {
  if (!isAuth) return <Navigate to={APP_ROUTES.LOGIN} />;

  return { children };
};

export default RequireAuth;
