import React from 'react';
import { importRemote } from '@module-federation/utilities';
import { Link } from 'react-router-dom';
import { useGlobalStore } from '@microfrontend-monorepo/shared-store';
const Top5Racer = React.lazy(
  () => import('apps/racers/src/components/Top5Racer')
);

// const Top5Racer = React.lazy(() =>
//   importRemote({
//     url: 'http://localhost:4205',
//     scope: 'racers',
//     module: './Top5Racer',
//   })
// );

export function App() {
  const { addProduct, store } = useGlobalStore();
  console.log(store);
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => addProduct({ id: Date.now(), title: 'Product 1' })}
      >
        Add Product
      </button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Link to="/shop/tickets">Tickets</Link>
        <React.Suspense fallback={null}>
          <Top5Racer />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
