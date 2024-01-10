const mongoose = require('mongoose')
const {Schema, Types: {ObjectId}} = mongoose


const feedbackSchema = new Schema({
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
    rating: {
        type: Number,
        required: true
    },
    message: {
        type: String,
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
}, { timestamps: true } )

const Feedback = mongoose.model('Feedback', feedbackSchema)
module.exports = Feedback;