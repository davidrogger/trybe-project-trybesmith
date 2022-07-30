import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Index, Order } from '../interface/order.interface';

class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    // salvo pela dica do Isaac no slack!
    const query = `
    SELECT
      orders.id AS id,
      orders.userId AS userId,
      JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Products AS products ON orders.id = products.orderId
    GROUP BY orders.id
    ORDER BY orders.userId;
    `;

    const [result] = await this.connection.query(query);
    return result as Order[];
  }

  async create(userId: number): Promise<Index> {
    const query = `
    INSERT INTO Trybesmith.Orders
    (userId)
    VALUES (?);
    `;
    const [{ insertId }] = await this.connection.query<ResultSetHeader>(query, [userId]);
    return { id: insertId };
  }
}

export default OrderModel;