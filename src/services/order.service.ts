import { Order } from '../interface/order.interface';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default OrderService;