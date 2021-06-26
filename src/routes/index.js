const router = require("express").Router();
const productsDesktop = require("../api/productsDesktop/endpoints").router;

router.use("/products-desktop", productsDesktop);

module.exports = {router};