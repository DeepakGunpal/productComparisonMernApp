const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: [true, 'Product Name is required.'] },
    price: { type: Number, required: [true, 'Price is mandatory.'] },
    ratings: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema);