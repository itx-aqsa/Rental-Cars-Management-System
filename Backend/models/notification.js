const mongoose = require('mongoose')
const { Schema, Types: {ObjectId} } = mongoose


const NotificationSchema = new Schema({
    customer: {
        type: ObjectId,
        ref: 'Customer',
        required: true
    },
    title: {
        type: String,
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
}, { timestamps: true })

const Notification = mongoose.model('Notification', NotificationSchema);
module.exports = Notification;