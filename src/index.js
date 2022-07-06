const express = require('express');
require("dotenv").config()
const routes = require('./routes');
const app = express();

const port = process.env.PORT || 3000

require('./database')

app.use(express.json());

app.use(routes)

app.listen(port, () => {
    console.log("App is running on port " + port);
});

// app.listen(3030)