'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('../auth/models/clothes/model.js');
const foodModel = require('../auth/models/food/model.js');
const Collection = require('../auth/models/data-collection.js');

const userModel = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  users: userModel(sequelize, DataTypes),
}
