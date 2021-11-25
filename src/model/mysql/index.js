const Enviroment = require('../../configuration/Enviroment');
const express = require('express');
const configuration = new Enviroment(process.env.ENVIROMENT).getEnviroment();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    configuration.db,
    configuration.dbUser,
    configuration.dbPassword,{
        host: configuration.hostAddr,
        dialect: 'mysql',
        operatorAliases: false,
        pool: {
            max: 10000,
            min: 0,
            idle: 2000,
            aquire: 2000
        }
    });

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.category = require('./category')(sequelize,Sequelize);
db.product = require('./product')(sequelize,Sequelize);
db.image = require('./image')(sequelize,Sequelize);
db.user = require('./user')(sequelize,Sequelize);
db.role = require('./role')(sequelize,Sequelize);

db.user.belongsToMany(db.role, {
    through: 'user_roles',
    foreignKey: 'roleId',
    otherKey: 'userId'
});

db.role.belongsToMany(db.user, {
    through: 'user_roles',
    foreignKey: 'roleId',
    otherKey: 'userId'
});

db.category.hasMany(db.product);
db.Roles = ['admin','customer' ];

module.exports = db;
