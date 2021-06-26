const pool = require("../../database/database").pool;

function getProductsByFamily(request, response) {
  pool.query(
    `SELECT * FROM ecommerce.products
         WHERE productType='${request.params.family}'  
         LIMIT 2 OFFSET ${request.params.offset}`,
    (error, results) => {
      if (error) response.send(error.message);
      response.send(results);
    }
  );
}

module.exports = {
  getProductsByFamily,
};
