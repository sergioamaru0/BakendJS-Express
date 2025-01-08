const UserService = require('../services/user.service');
const userService = new UserService();

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
const createUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await userService.createUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {getUsers, createUser};
