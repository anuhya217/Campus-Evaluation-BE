const axios = require("axios");
require("dotenv").config();

async function getDepots() {
    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/depots",
        {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}`
            }
        }
    );

    return response.data.depots;
}

module.exports = getDepots;