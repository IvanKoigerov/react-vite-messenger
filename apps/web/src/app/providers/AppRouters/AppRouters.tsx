import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { APP_ROUTES } from '~/app/providers/AppRouters/routes.const.ts';
import LoginPage from '~/pages/LoginPage.tsx';
import MainPage from '~/pages/MainPage.tsx';
import RegisterPage from '~/pages/RegisterPage.tsx';
import { useAppSelector } from '~/shared/hooks/redux.ts';
import { requireAuthHOC } from '~/shared/lib/requireAuth/requireAuthHOC.tsx';
import DefaultLayout from '~/shared/ui/DefaultLayout.tsx';
import FullPageLoader from '~/shared/ui/FullPageLoader.tsx';

const router = (isAuth: boolean) =>
  createBrowserRouter([
    {
      id: 'private',
      path: APP_ROUTES.MAIN,
      Component: DefaultLayout,
      children: [
        {
          index: true,
          Component: requireAuthHOC(MainPage, isAuth),
        },
      ],
    },
    {
      path: APP_ROUTES.LOGIN,
      Component: LoginPage,
    },
    {
      path: APP_ROUTES.REGISTER,
      Component: RegisterPage,
    },
  ]);

const AppRouters = () => {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);

  if (isAuth === null) return <FullPageLoader />;

  return <RouterProvider router={router(isAuth)} fallbackElement={<FullPageLoader />} />;
};

export default AppRouters;
