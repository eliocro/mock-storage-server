import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import routes from './routes';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(routes);

export default app;
