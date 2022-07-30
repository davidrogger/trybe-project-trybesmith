import { NewProduct, Product } from '../types/product.type';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

class ProductService {
  model: ProductModel;
  
  constructor() {
    this.model = new ProductModel(connection);
  }

  async create(product: NewProduct): Promise<Product> {
    const id = await this.model.create(product);
    return { ...id, ...product };
  }

  async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;