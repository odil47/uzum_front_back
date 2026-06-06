const express = require('express');
const router = express.Router();
const cardModel = require("../models/getAll.model")
const { cardCreate, getAllCards } = require("../controllers/get_create.controller")

router.get("/getAll", getAllCards)
router.post("/create", cardCreate)

module.exports = router;