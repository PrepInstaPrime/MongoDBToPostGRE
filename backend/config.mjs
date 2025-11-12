import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MongoDB_URI;
export { PORT, MONGODB_URI };