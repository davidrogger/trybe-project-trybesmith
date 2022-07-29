import express from 'express';
import errorHandler from './middlewares/errorHandler';
import productRoute from './routes/product.route';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use(errorHandler);

export default app;
