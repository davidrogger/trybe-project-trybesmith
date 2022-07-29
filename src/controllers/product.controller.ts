import { Request, Response } from "express";
import ProductService from "../services/product.service";
import validate from "../services/validation.service";

class ProductController {
  constructor(private productService = new ProductService()) {};

  create = async (req: Request, res: Response): Promise<void> => {
    const product = validate.productBody(req.body);
    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  }
};

export default ProductController;