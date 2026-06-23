const express = require("express");
const router = express.Router();

const getTraffic = require("../controllers/trafficcontrollers");

router.get("/", getTraffic);

module.exports = router;