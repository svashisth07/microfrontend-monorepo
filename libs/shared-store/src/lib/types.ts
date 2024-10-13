export type Product = {
  id: number;
  title: string;
};

export type Store = {
  products: Product[];
};

export type Listener = () => void;
