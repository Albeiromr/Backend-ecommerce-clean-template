const app = require("../app").app;
const dotenv = require("dotenv");

dotenv.config({path: `${__dirname}/../../.env`});

const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
    console.log(`listening in port ${port}`)
});