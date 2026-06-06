const getAllmodel = require('../models/getAll.model');

const cardCreate = async (req, res) => {
    try {
        // Massiv yoki bitta obyekt bo'lishini tekshirish
        const isArray = Array.isArray(req.body);
        const items = isArray ? req.body : [req.body];

        // Har bir obyektni validatsiya qilish
        for (let item of items) {
            const { img, title, category, description, price, discount } = item;
            if (!img || !title || !category || !description || !price || discount === undefined) {
                return res.status(400).json({
                    error: "Barcha maydonlarni toldiring!"
                });
            }
        }

        // insertMany bilan massiv saqlash
        const cards = await getAllmodel.insertMany(items);

        res.status(201).json({
            message: "Card muvofaqtiyatli yaratildi",
            data: cards
        });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


const getAllCards = async (req, res) => {
    const cards = await getAllmodel.find()
    res.status(200).json({
        message: "Barcha cardlar",
        data: cards
    })
}

module.exports = { cardCreate, getAllCards }