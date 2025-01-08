const {User, UserSchema} = require('./User.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
}
module.exports = setupModels;