const {models} = require('../libs/sequelize');

class UserService {
    constructor() {
  
    }

    async getUsers() {
        return await models.User.findAll();
    }

    async createUser(user) {
        const res = await models.User.create(user);
        return res;
    }
}

module.exports = UserService;