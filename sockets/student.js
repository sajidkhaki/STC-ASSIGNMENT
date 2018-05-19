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
        socket.on("load total activated students", function () {
             console.log("hi")
            students.count({ where: { status: true} }).then(function (data) {
                //console.log(data)
                if (data)
                    socket.emit('get total students count', data)
                else socket.emit('get total students count', 'ERROR')

            })

        })

    })
}
