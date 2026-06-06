const korzinkaModel = require('../models/korzinka.model');

const addToKorzinka = async (req, res) => {
    try {
        const { productId, quantity, userID } = req.body;

        if (!productId || !quantity || !userID) {
            return res.status(400).json({ message: "Barcha maydonlarni to'ldiring" });
        }
        const product = await korzinkaModel.findOne({productId, userID})

        if (!product) {
            const korzinkaItem = await korzinkaModel.create({ productId, quantity, userID });
            res.status(201).json(korzinkaItem);
            return
        }

        product.quantity += quantity;
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getKorzinka = async (req, res) => {
    try {
        const { userID } = req.body;
        const korzinkaItems = await korzinkaModel.find({ userID });
        res.status(200).json(korzinkaItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { addToKorzinka, getKorzinka }