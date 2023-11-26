const mongoose = require('mongoose')
const {Schema} = mongoose

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'Customer'
    },
    active: {
        type: Boolean,
        default: true
    },
}, { timestamps: true })

const auditCustomerSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    operation: {
        type: String,
        required: true
    },
    previousValues: {
        type: Object, // You might need to adjust this based on your data types
    },
    currentValues: {
        type: Object,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const AuditCustomer = mongoose.model('AuditCustomer', auditCustomerSchema);

customerSchema.pre('findOneAndUpdate', async function (next) {
    try {
        // Capture the original document before the update
        this._originalDoc = await this.model.findOne(this._conditions);
        next();
    } catch (error) {
        next(error);
    }
});

customerSchema.post('findOneAndUpdate', async function (result) {
    try {
        // console.log("I am here.")
        const customerId = this._originalDoc._id;
        const previousValues = this._originalDoc.toObject(); // Convert to plain object
        // console.log(previousValues) 
        const currentValues = this._update.$set; // Use this._update.$set to get modifications
        // console.log(currentValues)
        await AuditCustomer.create({
            customerId,
            operation: 'update',
            previousValues,
            currentValues
        });
    } catch (error) {
        console.error("Error in post update middleware:", error);
    }
});






const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer
