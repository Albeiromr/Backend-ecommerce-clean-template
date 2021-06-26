const router = require("express").Router();
const getProductsByFamily = require("./controllers").getProductsByFamily;

router.get("/:family", getProductsByFamily);

module.exports = {router};
