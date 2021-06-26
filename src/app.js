const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/index").router;


app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use("/static", express.static(`${__dirname}/./public/bigImg`));
app.use("/static", express.static(`${__dirname}/./public/thumbnail`));




module.exports = {app};




