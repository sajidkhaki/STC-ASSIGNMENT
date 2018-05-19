var sequelize = require('../datasource/db_config'),
    students = require('../models/staff')

module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.on('load students', function () {
            students.findAll().then(function (data) {
                console.log('hi   ' + JSON.stringify(data))
                if (data)
                    socket.emit('get student response', data)
                else socket.emit('get student response', 'ERROR')
            })
        })

        socket.on('save student details', function (details) {

            students.create(details).then(function (response) {
                if(response) {
                    var newDetails = {
                        responseCode: "000",
                        responseMessage: 'Success',
                        responseData: response
                    }
                    socket.emit("save student response", newDetails)
                }else{
                    socket.emit("save student response", "ERROR")
                }
            }).catch(function (error) {
                console.log(error)
                socket.emit("save student response", "ERROR")
            })

        })

        socket.on("update student details", function (details, userId) {
            students.update(details,{
                where: {
                    studentId: userId
                }
            }).then(function (data) {
                socket.emit("student details updated")
            }).catch(function (error) {
                socket.emit("student details updated", "ERROR")

            })
        })
    })
}
