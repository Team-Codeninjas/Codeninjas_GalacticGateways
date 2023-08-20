class PlanetSpaceportDto {
    constructor(spaceportId, spaceportName, planetName) {
        this.spaceportId = spaceportId;
        this.spaceportName = spaceportName;
        this.planetName = planetName;
    }
}

function create(spaceportId, spaceportName, planetName) {
    return new PlanetSpaceportDto(
        spaceportId,
        spaceportName,
        planetName
    );
}

module.exports = {
    create
}