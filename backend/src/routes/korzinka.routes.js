const express = require('express');
const router = express.Router();
const { addToKorzinka, getKorzinka, deleteFromKorzinka } = require('../controllers/korzinka.controller');

router.post("/korzinka", addToKorzinka);
router.post("/korzinkaGet", getKorzinka);
router.delete("/korzinka", deleteFromKorzinka);

module.exports = router;
