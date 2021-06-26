const pool = require("../../database/database").pool;

async function getProductsByFamily(request, response) {
  pool.query(
    `SELECT * FROM ecommerce.products
     WHERE productType='${request.params.family}'  
     LIMIT 9 OFFSET ${request.params.offset}`,
    (error, results) => {
      if (error) response.send(error.message);
      response.send(results);
    }
  );
};

module.exports = {
  getProductsByFamily,
};
