/**
 * Created by Sajid Khaki
 */
var Sequelize = require('sequelize')
var config = require('./connection_strings').local

var sequelize = new Sequelize(config.database, config.username, config.password, {

  host: config.host,
  dialect: 'mysql',
  timezone: '+05:30',
  pool: {
    max: 5,
    min: 0,
    idle: 20000
  }
})

sequelize.sync({force: false})

module.exports = sequelize
