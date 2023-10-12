const mongoose = require('mongoose')
const {Schema} = mongoose

const brandSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true} )



const Brand = mongoose.model('Brand', brandSchema)
module.exports = Brand;














