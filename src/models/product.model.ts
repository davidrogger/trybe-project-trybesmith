import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Index, NewProduct, Product } from '../interface/product.interface';

class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(product: NewProduct): Promise<Index> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const [result] = await this.connection.query<ResultSetHeader>(query, [name, amount]);
    const { insertId } = result;
    return { id: insertId };
  }

  async getAll(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.Products;';
    const [products] = await this.connection.query(query);
    return products as Product[];
  }

  async update(productId: number, orderId: number): Promise<void> {
    const query = 'UPDATE Trybesmith.Products SET orderId=? WHERE id=?;';
    await this.connection.query(query, [orderId, productId]);
  }
}

export default ProductModel;