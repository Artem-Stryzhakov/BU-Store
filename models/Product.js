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
    createAt: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    productPicture: String
})

export default mongoose.model("Product", getDataSchema)