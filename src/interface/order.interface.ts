export type Index = {
  id: number;
};

export type Order = Index & {
  id?: number;
  userId: number;
  productsIds: number[];
};

export type ProductOrder = Omit<Order, 'id' | 'userId'>;
