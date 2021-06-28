const Sequelize = require('sequelize');
const User = require('./user');
const Good = require('./good');
const Auction = require('./auction');
const Hashtag = require('./hashtag');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Good = Good;
db.Auction = Auction;
db.Hashtag = Hashtag;

User.init(sequelize);
Good.init(sequelize);
Auction.init(sequelize);
Hashtag.init(sequelize);

User.associate(db);
Good.associate(db);
Auction.associate(db);
Hashtag.associate(db);

module.exports = db;