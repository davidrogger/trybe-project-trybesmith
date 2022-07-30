import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import Validate from '../services/validation.service';

class OrderController {
  validate: Validate;

  constructor(private orderService = new OrderService()) {
    this.validate = new Validate();
  }

  getAll = async (_req: Request, res: Response): Promise<void> => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };

  create = async (req: Request, res: Response) => {
    const { id: userId } = res.locals.user;
    const { productsIds } = this.validate.productOrderBody(req.body);
    await this.orderService.create(userId, productsIds);
    res.status(201).json({ userId, productsIds });
  };
}

export default OrderController;