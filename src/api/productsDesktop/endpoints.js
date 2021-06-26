const express = require("express");
const router = express.Router();
const getProductsByFamily = require("./controllers").getProductsByFamily;

router.get("/:family", getProductsByFamily);


module.exports = {router};