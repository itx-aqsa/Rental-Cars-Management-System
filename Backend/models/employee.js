const mongoose = require('mongoose')
const {Schema} = mongoose

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'Employee'
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee
