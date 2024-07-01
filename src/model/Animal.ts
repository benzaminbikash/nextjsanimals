import mongoose from "mongoose";

var animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
    },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female'],
            message: `{VALUE} is not gender.`
        }
    },
    phone: {
        type: Number,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: {
        type: Number,
    },
    postBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const animal = mongoose.models.Animal || mongoose.model('Animal', animalSchema);

export default animal