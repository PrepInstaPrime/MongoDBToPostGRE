import express from 'express';
import router from './src/route.mjs';
import cors from 'cors';
import { initializeUserTable } from './src/database/userSchema.mjs'
import { PORT } from './config.mjs';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
const databaseConnection = async () => {
    try {
        await initializeUserTable();
    } catch (error) {
        console.error('Failed to initialize database:', error);
        process.exit(1);
    }
};
databaseConnection();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;