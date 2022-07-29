import { Router } from 'express';
import UserController from '../controllers/user.controller';
import 'express-async-errors';

const userRoute = Router();
const userController = new UserController();

userRoute.post('/', userController.create);

export default userRoute;