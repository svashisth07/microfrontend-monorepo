import * as React from 'react';
import { importRemote } from '@module-federation/utilities';
import { Link, Route, Routes } from 'react-router-dom';
import useSyncAppRouter from '../hooks/useSyncAppRouter';
import { ErrorBoundary } from 'react-error-boundary';
const Racers = React.lazy(() => import('racers/Module'));

const Dashboard = React.lazy(() => import('dashboard/Module'));

const Schedules = React.lazy(() => import('schedules/Module'));

// const Shop = React.lazy(() => import('shop/Module'));
const Shop = React.lazy(() =>
  importRemote({
    url: 'http://localhost:4203',
    scope: 'shop',
    module: './Module',
  })
);

// const Cart = React.lazy(() => import('cart/Module'));

// dynamic remote import
const Cart = React.lazy(() =>
  importRemote({
    url: 'http://localhost:4204',
    scope: 'cart',
    module: './Module',
  })
);

const ShopRouterHandler = () => {
  useSyncAppRouter({ basePath: '/shop' });
  return (
    <React.Suspense fallback={<>Loading Shop...</>}>
      <Shop />
    </React.Suspense>
  );
};

export function App() {
  // @ts-ignore
  console.log(__webpack_require__.S);
  return (
    <div>
      <h1>Host</h1>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/racers">Racers</Link>
        </li>
        <li>
          <Link to="/schedules">Schedules</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <ErrorBoundary fallback={<>Error</>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/racers" element={<Racers />} />

          <Route path="/schedules" element={<Schedules />} />

          <Route path="/shop/*" element={<ShopRouterHandler />} />

          <Route
            path="/cart"
            element={
              <React.Suspense fallback={<>Loading Cart...</>}>
                <Cart />
              </React.Suspense>
            }
          />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
