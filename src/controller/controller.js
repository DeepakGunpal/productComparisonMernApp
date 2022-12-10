const productModel = require('../model/model.js');
const handleErrors = require('../util/errorHandler.js');

const createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const product = await productModel.create(req.body);
        res.status(201).send({ status: true, data: product });
    } catch (error) {
        const err = handleErrors(error);
        res.status(400).send({ status: false, message: err });
    }
}

// const getProduct = async (req, res) => {
//     try {
//         const product = await productModel.find({ name: { $in: [req.query.p1, req.query.p2] } }).select('_id name price ratings');
//         res.status(200).send({ status: true, data: product });
//     } catch (error) {
//         res.status(400).send({ status: false, message: error.message });
//     }
// }

const getProduct = async (req, res) => {
    try {
        const product = await productModel.findOne({ name: req.params.productName }).select('_id name price ratings');
        res.status(200).send({ status: true, data: product });
    } catch (error) {
        res.status(400).send({ status: false, message: error.message });
    }
}

const getAllProduct = async (req, res) => {
    try {
        const product = await productModel.find().select('_id name');
        res.status(200).send({ status: true, data: product });
    } catch (error) {
        res.status(400).send({ status: false, message: error.message });
    }
}

module.exports = { createProduct, getProduct, getAllProduct };