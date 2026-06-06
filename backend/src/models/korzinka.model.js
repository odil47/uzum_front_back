const mongoose = require('mongoose');

const korzinkaSchema = new mongoose.Schema(
    {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
        userID: { type: String, required: true }
    }
)

module.exports = mongoose.model("korzinka", korzinkaSchema)