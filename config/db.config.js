const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
    logging: console.log,
    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});
 
const db = {};
db.Op = Sequelize.Op;
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
// db.files = require('../models/file.model.js')(sequelize, Sequelize);
db.userDb = require('./../model/users.model.js')(sequelize, Sequelize);
 
module.exports = db;