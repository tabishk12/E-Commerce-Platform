import colors from 'colors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import connectDB from '#config/db.config.js';
import { errorHandler } from '#middlewares/error.middleware.js';
import orderRoutes from '#routes/order.route.js';
import productRoutes from '#routes/product.route.js';
import userRoutes from '#routes/user.route.js';

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json()); // HTTP REQUEST BODY PARSING
app.use(cookieParser()); // COOKIE PARSING

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/orders', orderRoutes);

app.use('/api/v1/config/paypal', (req, res) => {
  res.json({ clientId: process.env.PAYPAL_CLIENT_ID });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold
  );
});
