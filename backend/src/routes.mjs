import express from 'express';
const router = express.Router();
import { createUser, getUsers } from './controllers/userController.mjs';
router.get('/', (req, res) => {
    res.send('Hello World');
});
router.post('/register', createUser);
router.get('/users', getUsers);
export default router;