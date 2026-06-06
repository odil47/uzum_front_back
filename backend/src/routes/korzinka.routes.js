const express = require('express');
const router = express.Router();
const { addToKorzinka, getKorzinka } = require('../controllers/korzinka.controller');

router.post("/korzinka", addToKorzinka);
router.get("/korzinka", getKorzinka);

module.exports = router;
