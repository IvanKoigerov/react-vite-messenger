import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { APP_ROUTES } from '~/app/providers/AppRouters/routes.const.ts';
import LoginPage from '~/pages/LoginPage.tsx';
import MainPage from '~/pages/MainPage.tsx';
import RegisterPage from '~/pages/RegisterPage.tsx';
import DefaultLayout from '~/shared/ui/DefaultLayout.tsx';

const router = createBrowserRouter([
  {
    id: 'private', //@TODO тут будет проверка на авторизацию юзера
    path: APP_ROUTES.MAIN,
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: MainPage,
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
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
};

export default AppRouters;
