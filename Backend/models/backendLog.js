const mongoose = require('mongoose')
const { Schema } = mongoose

const backendLogSchema = new Schema ({
    fileName: {
        type: String,
        required: true
    },
    functionName: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

const BackendLog = mongoose.model('BackendLog', backendLogSchema)
module.exports = BackendLog;