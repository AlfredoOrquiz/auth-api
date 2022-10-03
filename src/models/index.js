'use strict';

const userModel = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  db: sequelize,
  user: new Collection(userModel),
  users: userModel(sequelize, DataTypes),
};
