const model = require('../models/user.model');

const register = async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        if (!name || !surname || !email || !password) {
            return res.status(400).json({ message: "barcha maydonlarni toldiring" });
        }
        const user = await model.create({ name, surname, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await model.findOne({ email, password });
        if (!user) {
            return res.status(404).json({ error: "Foydalanuvchi topilmadi" });
        }
        
        res.status(200).json({
            message: "Muvaffaqiyatli kirildi",
            data: user
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { register, login }