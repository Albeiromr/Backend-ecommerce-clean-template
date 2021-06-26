const router = require("express").Router();
const productsDesktop = require("../api/productsDesktop/endpoints").router;
const productsMobile = require("../api/productsMobile/endpoints").router;

router.use("/products-desktop", productsDesktop);
router.use("/products-mobile", productsMobile);

module.exports = {router};