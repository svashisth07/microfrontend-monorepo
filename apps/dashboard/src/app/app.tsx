import React from 'react';
import { importRemote } from '@module-federation/utilities';
import { Link } from 'react-router-dom';
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
  return (
    <div>
      <h1>Dashboard</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          gap: '100px',
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