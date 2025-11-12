import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, MONGODB_URI } from './config.mjs';
import router from './src/routes.mjs';
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});
app.use('/', router);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});