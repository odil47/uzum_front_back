const mongoose = require('mongoose');

const getAllSchema = new mongoose.Schema(
    {
        img:{ type: String , required: true},
        title:{ type: String , required: true},
        category:{ type: String , required: true},
        description:{ type: String , required: true},
        price:{ type: Number , required: true},
        discount:{ type: Number , required: true},
    }
)
    
module.exports = mongoose.model("getAll", getAllSchema)