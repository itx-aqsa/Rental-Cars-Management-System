const mongoose = require('mongoose')
const mongoUri = "mongodb+srv://zaeem:12345@cluster0.lbtgmla.mongodb.net/rentalCars"

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log("Connected to MongoDB successfully...")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToMongo;