const express = require("express");
require("dotenv").config();

const trafficroutes = require("./routes/trafficroutes");

const app = express();

app.use(express.json());

app.use("/schedule", trafficroutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});