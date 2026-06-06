const likeModel = require("../models/like.model")

const likeCreate = async (req, res) => {
    try {
        const { productId, userID } = req.body;
        if (!productId || !userID) {
            return res.status(400).json({ message: "Barcha maydonlarni to'ldiring" });
        }
        const like = await likeModel.create({ productId, userID });
        res.status(201).json(like);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteLike = async (req, res) => {
    try {
        const { productId, userID } = req.body;
        if (!productId || !userID) {
            return res.status(400).json({ message: "Barcha maydonlarni to'ldiring" });
        }
        const like = await likeModel.findOneAndDelete({ productId, userID });
        if (!like) {
            return res.status(404).json({ message: "Like topilmadi" });
        }
        res.status(200).json({ message: "Like o'chirildi" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllLikes = async (req, res) => {
    try {
        const likes = await likeModel.find();
        res.status(200).json(likes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { likeCreate, getAllLikes, deleteLike }    