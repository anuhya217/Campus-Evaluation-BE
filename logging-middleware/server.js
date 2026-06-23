const express = require("express");
const logger = require("./index");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});