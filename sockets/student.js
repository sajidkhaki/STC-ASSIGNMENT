var sequelize = require('../datasource/db_config'),
    students = require('../models/staff')

module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.on('load student data', function () {
            students.findAll({where:{status:true}}).then(function (data) {
                if (data)
                    socket.emit('get student data response', data)
                else socket.emit('get student data response', 'ERROR')
            })
        })
    })
}
