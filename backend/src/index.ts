import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import pc from 'picocolors';
import indexRouter from './routes';
import errorHandler, { notFound } from './middleware/error';

// --- DB --- //
import connectDB from './config/db';

const port = process.env.PORT || 5000;
const app = express();

connectDB();

// Good ol' Cors
app.use(
  cors({
    credentials: true,
  }),
);

// Middleware
app.use(compression());
app.use(cookieParser());
app.use(express.json());

// Don't log requests in production mode
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('tiny'));
}

// Index Router
app.use('/api/v1/', indexRouter);

// 404 Errors
app.use('*', notFound);

// Error Handler
app.use(errorHandler);

// Hey, Listen
app.listen(port, () => {
  console.info(pc.blue(`> Server listening on port ${port}...`));
});
