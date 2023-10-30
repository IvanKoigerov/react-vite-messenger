import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DefaultLayout from '~/src/components/DefaultLayout.tsx';
import APP_ROUTES from '~/src/const/routes.ts';
import LoginPage from '~/src/pages/LoginPage.tsx';
import MainPage from '~/src/pages/MainPage.tsx';

const router = createBrowserRouter([
  {
    id: 'root',
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
]);

const AppRouters = () => {
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
};

export default AppRouters;
