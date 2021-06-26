const router = require("express").Router();
const getProductsByFamily = require("./controllers").getProductsByFamily;

router.get("/:family/:offset", getProductsByFamily);


module.exports = {router};