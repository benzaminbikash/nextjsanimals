import mongoose from 'mongoose'
const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
},);


const category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default category