const TravalClass = require('../dao/travelclass-dao.js');

const travelClassFunc = {}

travelClassFunc.createTravelClass = async (req, res) => {
    const travelClass = {
        ...req.body
    };

    TravalClass.create(travelClass)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the travel class."
            });
        });
}

travelClassFunc.getTravelClassById = async (req, res) => {
    TravalClass.findById(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving travel class."
        });
    });
}


module.exports = travelClassFunc;