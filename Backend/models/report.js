const mongoose = require('mongoose')
const { Schema, Types: {ObjectId} } = mongoose


const ReportSchema = new Schema({
    employee: {
        type: ObjectId,
        ref: 'Employee',
        required: true
    },
    type: {
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

const Report = mongoose.model('Report', ReportSchema);
module.exports = Report;