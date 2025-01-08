const {Model, DataTypes} = require('sequelize');

const User_table = 'users';

class User extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: User_table,
            modelName: 'User',
            timestamps: true,
            underscored: true,
        }
    }
}
const UserSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}

module.exports = {User, UserSchema};