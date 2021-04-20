import express from 'express';
const app = express();
import sequelize from './db';

import cors from 'cors';
import router from './routes/index.routes';

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.use('/', router);

export default app;

