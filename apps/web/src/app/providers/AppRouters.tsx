import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from '~/src/pages/LoginPage.tsx';
import MainPage from '~/src/pages/MainPage.tsx';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/main',
    Component: null,
    children: [
      {
        index: true,
        Component: MainPage,
      },
    ],
  },
  {
    path: '/',
    Component: LoginPage,
  },
]);

const AppRouters = () => {
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
};

export default AppRouters;
