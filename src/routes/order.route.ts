import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import authentication from '../middlewares/authentication';

const orderController = new OrderController();
const orderRoute = Router();

orderRoute.get('/', orderController.getAll);
orderRoute.use(authentication);
orderRoute.post('/', orderController.create);

export default orderRoute;