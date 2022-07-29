import { Router } from 'express';
import 'express-async-errors';
import OrderController from '../controllers/order.controller';

const orderCOntroller = new OrderController();
const orderRoute = Router();

orderRoute.get('/', orderCOntroller.getAll);

export default orderRoute;