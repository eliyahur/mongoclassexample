const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema({
    name: String,
    age: Number
});


const product = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        lowercase: true
    },
    createAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    price: {
        type: Number,
        min: 1,
        max: 99,
    },
    brand: {
        type: String,
        minlength: 1,
        maxlength: 10,
    },
    farmer: farmerSchema,
    nutritions: [String],
    supplier: mongoose.SchemaTypes.ObjectId
});

module.exports = mongoose.model("product", product);