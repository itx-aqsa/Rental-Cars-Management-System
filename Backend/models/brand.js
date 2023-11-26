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


const auditBrandSchema = new Schema({
    brandId: {
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


const AuditBrand = mongoose.model('AuditBrand', auditBrandSchema);

// Define middleware to handle audit logging before removing a brand
// brandSchema.pre('remove', async function (next) {
//     try {
//         const brandId = this._id;
//         await AuditBrand.create({ brandId, operation: 'remove' });
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

// Define middleware to handle audit logging before updating a brand
// brandSchema.pre('update', async function (next) {
//     try {
//         console.log("I am here.")
//         const brandId = this._conditions._id;
//         await AuditBrand.create({ brandId, operation: 'update' });
//         next();
//     } catch (error) {
//         next(error);
//     }
// });


// brandSchema.post('findOneAndUpdate', async function (result) {
//     try {
//         const brandId = result._id;
//         await AuditBrand.create({ brandId, operation: 'update' });
//     } catch (error) {
//         console.error("Error in post update middleware:", error);
//     }
// });


// brandSchema.post('findOneAndUpdate', async function (result) {
//     try {
//         console.log("I am here.")
//         const brandId = result._id;
//         const previousValues = result._doc;
//         console.log(previousValues) // This gets the original document before the update
//         const currentValues = this._update;
//         console.log(currentValues)
//         // await AuditBrand.create({
//         //     brandId,
//         //     operation: 'update',
//         //     previousValues,
//         //     currentValues
//         // });
//     } catch (error) {
//         console.error("Error in post update middleware:", error);
//     }
// });


brandSchema.pre('findOneAndUpdate', async function (next) {
    try {
        // Capture the original document before the update
        this._originalDoc = await this.model.findOne(this._conditions);
        next();
    } catch (error) {
        next(error);
    }
});

brandSchema.post('findOneAndUpdate', async function (result) {
    try {
        // console.log("I am here.")
        const brandId = this._originalDoc._id;
        const previousValues = this._originalDoc.toObject(); // Convert to plain object
        // console.log(previousValues) 
        const currentValues = this._update.$set; // Use this._update.$set to get modifications
        // console.log(currentValues)
        await AuditBrand.create({
            brandId,
            operation: 'update',
            previousValues,
            currentValues
        });
    } catch (error) {
        console.error("Error in post update middleware:", error);
    }
});



const Brand = mongoose.model('Brand', brandSchema)
module.exports = Brand;














