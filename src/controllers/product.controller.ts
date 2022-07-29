import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import Validate from '../services/validation.service';

class ProductController {
  validate: Validate;

  constructor(private productService = new ProductService()) {
    this.validate = new Validate();
  }

  create = async (req: Request, res: Response): Promise<void> => {
    const product = this.validate.productBody(req.body);
    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  };

  getAll = async (req: Request, res: Response): Promise<void> => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };
}

export default ProductController;