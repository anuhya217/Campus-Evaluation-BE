const getDepots = require("../services/depotservice");
const getVehicles = require("../services/vehicleservice");
const findMaxImpact = require("../services/knapsack");

async function getTraffic(req, res) {

    try {

        const depots = await getDepots();
        const vehicles = await getVehicles();

        let answer = [];

        for (let depot of depots) {

            let impact = findMaxImpact(
                vehicles,
                depot.MechanicHours
            );

            answer.push({
                depotId: depot.ID,
                maxImpact: impact
            });

        }

        res.json(answer);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

}

module.exports = getTraffic;