import express from 'express';
const app = express();
import { createCategories } from './api/categories/categories.preloaded';
import cors from 'cors';
import router from './routes/index.routes';
import './asociations';

createCategories();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.use('/', router);

export default app;

