const mongoose = require('mongoose')
const {Schema} = mongoose

const customerSchema = new Schema({
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
        default: 'Customer'
    },
    active: {
        type: Boolean,
        default: true
    },
}, { timestamps: true })

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer
