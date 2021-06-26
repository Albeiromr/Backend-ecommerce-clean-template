const express = require("express")

function getProductsByFamily(request, response) {
    response.send("hola si funciona")
};

module.exports = {
    getProductsByFamily
};