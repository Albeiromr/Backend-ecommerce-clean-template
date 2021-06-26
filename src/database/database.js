const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({path: `${__dirname}/../../.env`});

const pool = mysql.createPool({
 connectionLimit: 1000,
 host: process.env.DATABASE_HOST,
 user: process.env.DATABASE_USER,
 password: process.env.DATABASE_PASSWORD,
 DATABASE: process.env.DATABAS_DATABASE
});


module.exports = {pool};