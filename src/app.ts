import express from 'express';
import errorHandler from './middlewares/errorHandler';
import loginRoute from './routes/login.route';
import orderRoute from './routes/order.route';
import productRoute from './routes/product.route';
import userRoute from './routes/user.route';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/login', loginRoute);
app.use(errorHandler);

export default app;
