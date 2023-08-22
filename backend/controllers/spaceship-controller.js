const Spaceship = require('../dao/spaceship-dao.js');

const spaceshipFunc = {}

spaceshipFunc.createSpaceship = async (req, res) => {
    const spaceship = {
        ...req.body
    };

    Spaceship.create(spaceship)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the spaceship."
            });
        });
}

spaceshipFunc.getSpaceshipById = async (req, res) => {
    Spaceship.findById(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving spaceship."
        });
    });
}


module.exports = spaceshipFunc;