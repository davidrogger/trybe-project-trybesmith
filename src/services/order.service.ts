import { Order } from '../types/order.type';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';

class OrderService {
  model: OrderModel;

  product: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.product = new ProductModel(connection);
  }

  async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  async create(id: number, products: number[]): Promise<void> {
    const { id: orderId } = await this.model.create(id);
    await Promise.all(products.map(
      (productId: number): number => {
        this.product.update(productId, orderId);
        return productId;
      },
    ));
  }
}

export default OrderService;