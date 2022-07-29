import { Router } from "express";
import 'express-async-errors';
import ProductController from "../controllers/product.controller";

const productController = new ProductController();

const productRoute = Router();

productRoute.post('/', productController.create);

export default productRoute;