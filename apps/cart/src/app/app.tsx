import { useGlobalStore } from '@microfrontend-monorepo/shared-store';

export function App() {
  const { store } = useGlobalStore();
  return (
    <div>
      <h1>Cart</h1>
      <pre>{JSON.stringify(store.products, null, 2)}</pre>
    </div>
  );
}

export default App;
