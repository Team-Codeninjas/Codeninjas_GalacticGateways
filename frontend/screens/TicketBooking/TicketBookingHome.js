// screens/HomeScreen.js
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import { Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { fetchFlightData } from "./api";
import backgroundImage from "../../images/background.jpg";

const TicketBookingHome = ({ route }) => {
  const [flightData, setFlightData] = useState([]);
  const [showAllDetails, setShowAllDetails] = useState(false);
  const navigation = useNavigation();

  const handleShowDetails = () => {
    setShowAllDetails(true);
  };
  const handleAddBaggageCapacity = () => {
    navigation.navigate("TicketBookingDetails");
  };

  const { showPayNowButton } = route.params || {};
  const HandlePayNow = () => {
    const { selectedClass, seatCount, sliderValue } = route.params;
    const selectedFlights = flightData.filter((flight) => flight.containerPressed);

    // Create an array to hold the selected flight details
    const selectedFlightDetails = selectedFlights.map((flight) => ({
      id: flight.id,
      date: flight.date,
      time: flight.time,
      flightType:flight.flightType,
      airlineType:flight.airlineType,
      road:flight.road,
      selectedClass: selectedClass,
      seatCount: seatCount,
      BaggageCapacity: sliderValue,
    }));
    // const paymentDetails = {
    //   selectedClass: selectedClass,
    //   seatCount: seatCount,
    //   BaggageCapacity: sliderValue,
    //   flights: selectedFlightDetails,
    // };
    // alert(JSON.stringify(selectedFlightDetails, null, 2));
    navigation.navigate("ChargesPage",{selectedFlightDetails});
  };

  const toggleContainerPressed = (id) => {
    setFlightData((prevData) =>
      prevData.map((flight) =>
        flight.id === id
          ? { ...flight, containerPressed: !flight.containerPressed }
          : flight
      )
    );
  };

  useEffect(() => {
    fetchFlightData().then((data) =>
      setFlightData(
        data.map((flight) => ({ ...flight, containerPressed: false }))
      )
    );
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}>
      <View style={styles.buttonEarthViews}>
        <View>
          <Button
            icon="airplane-takeoff"
            style={styles.buttonEarth}
            labelStyle={styles.buttonLabel}
          >
            EARTH
          </Button>
        </View>
        <View>
          <Button icon="arrow-right" labelStyle={styles.buttonLabelArrow} />
        </View>
        <View>
          <Button
            icon="airplane-landing"
            style={styles.buttonKepler}
            labelStyle={styles.buttonLabel}
          >
            KEPLER
          </Button>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {flightData.map((flight, index) =>
          (!showAllDetails && index < 2) || showAllDetails ? (
            <TouchableOpacity
              key={flight.id}
              style={[
                styles.buttonContainer,
                flight.containerPressed && styles.buttonContainerPressed,
              ]}
              onPress={() => toggleContainerPressed(flight.id)}
            >
              {/* <View>
          <Button icon="alpha-a-box"></Button>
          </View> */}
              <View>
                <View style={styles.button1container}>
                  <Text style={styles.button1containerText}>{flight.date}</Text>
                  <Text style={styles.button1containerText}>{flight.time}</Text>
                  <Text style={styles.button1containerText}>
                    {flight.flightType}
                  </Text>
                </View>
                <View style={styles.button2container}>
                  <Text style={styles.button2containerText}>
                    {flight.airlineType}
                  </Text>
                  <Text style={styles.button2containerText}>
                    {flight.waitTime}
                  </Text>
                </View>
                <View style={styles.button3container}>
                  <Text style={styles.button3containerText}>{flight.road}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : null
        )}
      </ScrollView>

      <View>
        <Button
          contentStyle={styles.button4content}
          style={styles.button4container}
          labelStyle={styles.buttonLabel}
          onPress={handleShowDetails}
        >
          <Text>Show Flight Details</Text>
        </Button>
      </View>
      <View>
        <Text style={styles.addFacilityText}>Additional Facility</Text>
      </View>
      <View>
        <Button
          icon="bag-checked"
          style={styles.button5container}
          labelStyle={styles.buttonLabel}
          onPress={handleAddBaggageCapacity}
        >
          <Text>Add Baggage Capacity</Text>
        </Button>
      </View>
      <View>
        <Button
          icon="account"
          style={styles.button6container}
          labelStyle={styles.buttonLabel}
          onPress={handleAddBaggageCapacity}
        >
          <Text>Choose Class</Text>
        </Button>
      </View>
      <View>
        <Button
          icon="seat"
          style={styles.button7container}
          labelStyle={styles.buttonLabel}
          onPress={handleAddBaggageCapacity}
        >
          <Text>Choose Your Seat</Text>
        </Button>
      </View>
      {showPayNowButton && (
        <View>
          <Button
            style={styles.buttonPayNow}
            labelStyle={styles.buttonLabel}
            onPress={HandlePayNow}
          >
            Pay Now
          </Button>
        </View>
      )}
      {/* <View>
        <Text style={{ color: "white" }}>Selected Class: {selectedClass}</Text>
        <Text style={{ color: "white" }}>Selected Seats: {seatCount}</Text>
        <Text style={{ color: "white" }}>Slider Value: {sliderValue}</Text>
      </View> */}
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#040939",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 5,
  },
  scrollView: {
    minHeight: 220,
    maxHeight: 250,
    flexGrow: 0,
  },
  buttonEarthViews: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: -40,
    marginBottom: 20,
  },
  buttonEarth: {
    backgroundColor: "#5528D6",
    color: "#fff",
    borderRadius: 10,
    minWidth: 100,
    minHeight: 40,
    justifyContent: "center",
  },
  buttonKepler: {
    backgroundColor: "#5528D6",
    color: "#fff",
    borderRadius: 10,
    minWidth: 100,
    minHeight: 40,
    justifyContent: "center",
  },
  buttonLabel: {
    color: "#fff",
  },
  buttonLabelArrow: {
    color: "#fff",
    fontSize: 40,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    padding: 20,
    transition: "background-color 0.3s",
    borderRadius: 5,
    minWidth: 330,
    margin: 5,
  },
  buttonContainerPressed: {
    backgroundColor: "#A4A4A4", // Change to the desired hover color
  },
  button1container: {
    flexDirection: "row",
    gap: 34,
    marginBottom: 3,
  },
  button1containerText: {
    fontWeight: "bold",
  },
  button2container: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    gap: 150,
  },
  button2containerText: {
    fontSize: 10,
  },
  button3container: {
    flexDirection: "row",
    marginTop: 5,
  },
  button3containerText: {
    fontSize: 10,
    fontWeight: "600",
  },
  button4container: {
    backgroundColor: "#0C0337", // Set background to transparent
    borderColor: "#fff", // Add white border
    borderWidth: 1,
    minWidth: 320,
    borderRadius: 5,
    marginVertical: 10,
    color: "#fff",
    marginTop: 20,
  },
  addFacilityText: {
    color: "#fff",
    fontSize: 20,
    fontWeight:"700",
    minWidth: 320,
    marginTop: 25,
  },
  button5container: {
    backgroundColor: "#0C0337",
    color: "#fff",
    minHeight:45,
    marginTop: 20, // Add any additional styling you need
    borderRadius: 10,
    marginBottom: 20,
    minWidth: 320,
  },
  button6container: {
    backgroundColor: "#0C0337",
    borderRadius: 10,
    minHeight:45,
    minWidth: 320,
    marginBottom: 20,
  },
  button7container: {
    backgroundColor: "#0C0337",
    borderRadius: 10,
    minHeight:45,
    minWidth: 320,
    marginBottom: 15,
  },
  buttonPayNow: {
    backgroundColor: "#5528D6",
    color: "#fff",
    borderRadius: 10,
    marginLeft: 175,
    marginTop: 15,
    minWidth: 140,
    minHeight: 45,
    justifyContent: "center",
  },
  image:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    width: "100%",
  }
});

export default TicketBookingHome;
