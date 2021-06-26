const pool = require("../../database/database").pool;

function getProductsByFamily(request, response) {
    pool.query("SELECT * FROM ecommerce.products", (error, results) => {
        if (error) response.send(error.message);
        response.send(results);
    });
};

module.exports = {
    getProductsByFamily
};