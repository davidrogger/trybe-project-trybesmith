import { NewProduct, Product } from "../interface/product.interface";
import connection from "../models/connection";
import ProductModel from "../models/product.model";

class ProductService {
  model: ProductModel;
  
  constructor() {
    this.model = new ProductModel(connection);
  }

  async create(product: NewProduct): Promise<Product> {
    const id = await this.model.create(product);
    return { ...id, ...product };
  };
}

export default ProductService;