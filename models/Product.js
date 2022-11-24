import mongoose from "mongoose";

const getDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productPicture: String
})

export default mongoose.model("Product", getDataSchema)