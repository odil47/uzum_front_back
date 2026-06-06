const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
    {
        productId: { type: String, required: true },
        userID: { type: String, required: true }
    }
)

module.exports = mongoose.model("like", likeSchema)