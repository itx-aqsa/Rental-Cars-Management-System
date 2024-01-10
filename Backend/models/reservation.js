const mongoose = require('mongoose');
const { Schema, Types: {ObjectId} } = mongoose;


const reservationSchema = new Schema({
    customer: {
        type: ObjectId,
        ref: 'Customer',
        required: true
    },
    vehicle: {
        type: ObjectId,
        ref: 'Vehicle',
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    },
    confirmation: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
