import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 8000;
const PostgreSQL_URI = process.env.PostGre_URI;
export { PORT, PostgreSQL_URI };