const mongoose = require('mongoose')
const { Schema, Types: {ObjectId} } = mongoose


const PaymentSchema = new Schema({
    customer: {
        type: ObjectId,
        ref: 'Customer',
        required: true
    },
    method: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

const Payment = mongoose.model('Payment', PaymentSchema);
module.exports = Payment;