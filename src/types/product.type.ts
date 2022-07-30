export type Index = {
  id: number;
};

export type NewProduct = {
  name: string;
  amount: string;
};

export type Product = Index & NewProduct;
