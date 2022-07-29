import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  getAll = async (_req: Request, res: Response): Promise<void> => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };
}

export default OrderController;