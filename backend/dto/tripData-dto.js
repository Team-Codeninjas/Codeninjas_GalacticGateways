class TripDataDto{
    constructor(originId,destinationId, departureDate, arrivalDate) {
        this.originId = originId;
        this.destinationId = destinationId;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
    }
}

function create(originId,destinationId, departureDate, arrivalDate) {
    return new TripDataDto(
        originId,
        destinationId,
        departureDate,
        arrivalDate
    );
}

module.exports = {
    create
}