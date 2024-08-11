const express = require("express");
const { getCartoons, addCartoon, deleteCartoon, updateCartoon } = require("../controllers/cartoon.controller");
const router = express.Router();


router.get("/", getCartoons);

router.post("/", addCartoon);

router.delete("/:id", deleteCartoon);

router.put("/:id",updateCartoon)

module.exports = router;