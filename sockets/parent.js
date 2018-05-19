var sequelize = require('../datasource/db_config'),
    students = require('../models/staff')

module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.on('load student with rollNo', function (data) {
            console.log(data)
            students.findAll({where:{studentId:data.studentId}}).then(function (data) {
                if (data)
                    socket.emit('get student data response value', data)
                else socket.emit('get student data response value', 'ERROR')
            })
        })
    })
}
