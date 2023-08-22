const Spaceport = require('../dao/spaceport-dao.js');
const PlanetSpaceportDto = require('../dto/planetSpaceport-dto.js');

const spaceportFunc = {};

spaceportFunc.getSpaceports = async (req, res) =>{
    await Spaceport.find()
        .then((spaceports) => {
            res.status(200).json(spaceports);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

spaceportFunc.createSpaceport = async (req, res) =>{
    const spaceport = {
        name: req.body.name,
        origin_planet_id: req.body.origin_planet_id,
        service_charge: req.body.service_charge,
        image_path: req.body.image_path
    };

    await Spaceport.create(spaceport)
        .then((spaceport) => {
            res.status(200).json(spaceport);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

spaceportFunc.getSpaceportsWithPlanet = async (req, res) => {
    await Spaceport.find()
        .populate('origin_planet_id', 'name', 'Planet')
        .then((spaceports) => {
            const spaceportsWithPlanet = spaceports.map((spaceport) => {
                return PlanetSpaceportDto.create(spaceport._id, spaceport.name, spaceport.origin_planet_id.name);
            });

            res.status(200).json(spaceportsWithPlanet);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}


module.exports = spaceportFunc;