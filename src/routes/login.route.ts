import { Router } from 'express';
import LoginController from '../controllers/login.controller';

const loginController = new LoginController();
const loginRoute = Router();

loginRoute.post('/', loginController.auth);

export default loginRoute;