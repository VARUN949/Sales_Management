const mongoose = require("mongoose")
const { Mongo_URL_Product } = require("../index")

const productSchema = new mongoose.Schema({
    productID: {
        type: Number,
        require: true,
        unique: true
    },
    Name: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true
    },
    Description: {
        type: String
    },
    Price: {
        type: Number,
        require: true
    }
    // Photos: {
    //     require: true
    // }
}, { timestamps: true })

const Product = mongoose.model("product", productSchema)

module.exports = Product