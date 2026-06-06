const express = require('express');
const router = express.Router();
const likeModel = require("../models/like.model")
const { likeCreate, getAllLikes, deleteLike }  = require("../controllers/like.controller")

router.get("/getAllLikes", getAllLikes)
router.post("/likeCreate", likeCreate)
router.delete("/deleteLike", deleteLike)

module.exports = router;