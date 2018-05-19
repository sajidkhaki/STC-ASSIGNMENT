/**
 * Created by Sajid Khaki
 */

let Sequelize = require('sequelize')
let dataConfig = require('../datasource/db_config')

let staff = dataConfig.define('staff', {
    studentId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    age: Sequelize.STRING,
    Address: Sequelize.STRING,
    remarks: Sequelize.STRING,
    status: Sequelize.BOOLEAN
})

module.exports = staff