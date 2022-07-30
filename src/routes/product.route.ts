import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productController = new ProductController();

const productRoute = Router();

productRoute.post('/', productController.create);
productRoute.get('/', productController.getAll);

export default productRoute;