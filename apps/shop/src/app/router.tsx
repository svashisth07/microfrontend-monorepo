import { lazy, Suspense, useMemo } from 'react';
import {
  createMemoryRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import useSyncGlobalRouter from '../hooks/useSyncGlobalRouter';

const Landing = lazy(() => import('./pages/landing'));
const Merchandise = lazy(() => import('./pages/merchandise'));
const Tickets = lazy(() => import('./pages/tickets'));

const RouteHandler = () => {
  useSyncGlobalRouter({basePath: '/shop'});
  return <Outlet />;
};

const createAppRouter = () => {
  return createMemoryRouter(
    [
      {
        path: '/',
        element: <RouteHandler />,
        children: [
          { index: true, element: <Suspense fallback={<>Loading...</>}> <Landing /> </Suspense> },
          { path: 'merchandise', element: <Suspense fallback={<>Loading...</>}> <Merchandise /> </Suspense> },
          { path: 'tickets', element: <Suspense fallback={<>Loading...</>}> <Tickets /> </Suspense> },
        ],
      },
    ],
    { initialEntries: [location.pathname.replace('/shop', '') || '/'] }
  );
};

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);
  return <RouterProvider router={router} />;
};
