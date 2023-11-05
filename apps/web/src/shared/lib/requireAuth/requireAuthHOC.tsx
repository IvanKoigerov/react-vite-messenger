import { Navigate } from 'react-router-dom';

import { APP_ROUTES } from '~/app/providers/AppRouters/routes.const.ts';

export const requireAuthHOC = (Component: () => JSX.Element, isAuth?: boolean | null) => {
  return () => {
    if (!isAuth) return <Navigate to={APP_ROUTES.LOGIN} />;

    return <Component />;
  };
};
