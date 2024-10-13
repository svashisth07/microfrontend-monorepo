import { Listener, Product, Store } from "./types";

let store: Store = {
  products: [],
};

let listeners: Listener[] = [];

declare global {
  interface Window {
    STORE_LISTENERS: Listener[];
  }
}

export const globalStore = {
  addProduct(product: Product) {
    store = {
      ...store,
      products: [...store.products, product],
    };
    emitChange();
  },
  subscribe(listener: Listener) {
    const listeners = window.STORE_LISTENERS || [];
    window.STORE_LISTENERS = [...listeners, listener];
    return () => {
      window.STORE_LISTENERS = window.STORE_LISTENERS.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return store;
  },
};

const emitChange = () => {
  window.STORE_LISTENERS?.forEach((listener) => listener());
};
