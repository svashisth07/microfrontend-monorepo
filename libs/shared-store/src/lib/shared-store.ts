import { useSyncExternalStore } from "react";
import { globalStore } from "./store";

export const useGlobalStore = () => {
  const store = useSyncExternalStore(
    globalStore.subscribe,
    globalStore.getSnapshot
  );
  return {
    store,
    addProduct: globalStore.addProduct,
  };
};
