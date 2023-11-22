const mongoose = require('mongoose')
const { Schema } = mongoose


const frontendLogSchema = new Schema ({
    fileName: {
        type: String,
        required: true
    },
    uiScreen: {
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

const FrontendLog = mongoose.model('FrontendLog', frontendLogSchema)
module.exports = FrontendLog;




