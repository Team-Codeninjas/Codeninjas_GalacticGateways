// api.js

const sampleFlightData = [
    {
      id: 1,
      date: '23 Aug 2023',
      time: '8.45 AM',
      flightType: 'Direct',
      airlineType: 'Airtours Airline',
      waitTime: '3D 20h',
      road: 'Alpha to Theta'
    },
    {
      id: 2,
      date: '26 Aug 2023',
      time: '9.30 AM',
      flightType: 'Direct',
      airlineType: 'Airtours Airline',
      waitTime: '2D 2h',
      road: 'Alpha to Theta'
    },
    {
      id: 3,
      date: '26 Aug 2023',
      time: '11.30 AM',
      flightType: 'Direct',
      airlineType: 'Airtours Airline',
      waitTime: '3D 2h',
      road: 'Alpha to Theta'
    },
    {
      id: 4,
      date: '30 Aug 2023',
      time: '9.30 PM',
      flightType: 'Direct',
      airlineType: 'Airtours Airline',
      waitTime: '2D 0h',
      road: 'Alpha to Theta'
    },
    // Add more sample flight data here...
  ];
  
  const fetchFlightData = async () => {
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return sampleFlightData;
  };
  
  export { fetchFlightData };
  