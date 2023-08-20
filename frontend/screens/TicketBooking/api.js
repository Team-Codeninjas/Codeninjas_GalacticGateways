// api.js

const sampleFlightData = [
    {
      id: 1,
      date: '15 Aug 2023',
      time: '8.45 AM',
      flightType: 'Direct',
      airlineType: 'Airtours Airline',
      waitTime: '2h 20m',
      road: 'Earth to MARS'
    },
    {
      id: 2,
      date: '16 Aug 2023',
      time: '9.30 AM',
      flightType: 'Connecting',
      airlineType: 'Airtours Airline',
      waitTime: '2h 20m',
      road: 'Earth to MARS'
    },
    {
      id: 3,
      date: '16 Aug 2023',
      time: '9.30 AM',
      flightType: 'Connecting',
      airlineType: 'Airtours Airline',
      waitTime: '2h 20m',
      road: 'Earth to MARS'
    },
    {
      id: 4,
      date: '16 Aug 2023',
      time: '9.30 AM',
      flightType: 'Connecting',
      airlineType: 'Airtours Airline',
      waitTime: '2h 20m',
      road: 'Earth to MARS'
    },
    // Add more sample flight data here...
  ];
  
  const fetchFlightData = async () => {
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return sampleFlightData;
  };
  
  export { fetchFlightData };
  