const axios = require("axios");
require("dotenv").config();

async function getVehicles() {

    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/vehicles",
        {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}`
            }
        }
    );

    return response.data.vehicles;
}

module.exports = getVehicles;