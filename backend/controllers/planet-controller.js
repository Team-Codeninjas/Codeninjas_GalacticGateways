const Planet = require('../dao/planet-dao.js');

const planetFunc = {};

planetFunc.createPlanet = async (req, res) =>{
    const planet = {
        name: req.body.name,
        origin_galaxy: req.body.origin_galaxy,
        description: req.body.description
    };

    await Planet.create(planet)
        .then((planet) => {
            res.status(200).json(planet);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

module.exports = planetFunc;