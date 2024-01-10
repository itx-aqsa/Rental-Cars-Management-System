const mongoose = require('mongoose')
const { Schema, Types: {ObjectId} } = mongoose

const vehicleSchema = new Schema({
    brand: {
        type: ObjectId,
        ref: "Brand",
        required: true
    },
    year: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Available'
    },
    discount: {
        type: Number,
        default: 0
    },
    plateNumber: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: [String],
        default: []
    },
    description: {
        type: String,
        required: true
    },
    pricePerDay: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

const Vehicle = mongoose.model('Vehicle', vehicleSchema)
module.exports = Vehicle;