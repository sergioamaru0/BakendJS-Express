const { config } = require('../config/Config');
const {Sequelize} = require('sequelize');
const setupModels = require('../db/models/index');

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        port: config.dbPort,
        dialect: 'postgres',
    }
);

sequelize.sync()
setupModels(sequelize);

module.exports = sequelize;