import User from '../models/userModel.mjs';

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        return res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: 'Users fetched successfully', users });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
export { createUser, getUsers };