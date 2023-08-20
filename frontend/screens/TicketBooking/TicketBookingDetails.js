import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import Slider from "@react-native-community/slider";
import { Text, Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
const TicketBookingDetails = () => {
  const navigation = useNavigation();

  const handleApplyButton = () => {
    // Navigate back to TicketBookingHome and pass the true value
    navigation.navigate("TicketBookingHome", {
      showPayNowButton: true,
      selectedClass: selectedClass,
      seatCount:seatCount,
      sliderValue: sliderValue,
    });
  };
  const handleBackButton = () => {
    // Navigate back to TicketBookingHome and pass the true value
    navigation.navigate("TicketBookingHome");
  };

  const numRows = 6;
  const numCols = 4;

  const [selectedClass, setSelectedClass] = useState("A");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [sliderValue, setSliderValue] = useState(0); // Initial value
  const [bookedSeat, setBookedSeat] = useState(["1-2", "2-1" , "5-3"]);
  const [seatCount, setSeatCount] = useState(0);
  const onSliderValueChange = (value) => {
    setSliderValue(value);
  };

  const toggleSeat = (row, col) => {
    if (bookedSeat.includes(seatId)) {
      return;
    }
    const seatId = `${row}-${col}`;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
      setSeatCount(prevSeatCount => prevSeatCount - 1);
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
      setSeatCount(prevSeatCount => prevSeatCount + 1);
    }
  };

  const isSeatSelected = (row, col) => {
    return selectedSeats.includes(`${row}-${col}`);
  };

  const renderSeats = () => {
    const seats = [];

    for (let row = 1; row <= numRows; row++) {
      const rowSeats = [];
      for (let col = 1; col <= numCols; col++) {
        const seatId = `${row}-${col}`;
        const isSelected = isSeatSelected(row, col);
        const isBooked = bookedSeat.includes(seatId);
        rowSeats.push(
          <TouchableOpacity
            key={`${row}-${col}`}
            style={[
              styles.seat,
              isSelected ? styles.selectedSeat : null,
              isBooked ? styles.bookedSeat : null,
            ]}
            onPress={() => {
              if (!isBooked) {
                toggleSeat(row, col);
              }
            }}
          >
            <Text
              style={[
                styles.seatText,
                isSelected ? styles.selectedText : null,
                isBooked ? styles.bookedText : null,
              ]}
            >{`${row}-${col}`}</Text>
          </TouchableOpacity>
        );
      }
      seats.push(
        <View key={row} style={styles.row}>
          {rowSeats}
        </View>
      );
    }

    return seats;
  };
  return (
    <View style={styles.container}>
      <View style={styles.apply}>
        <FontAwesome
          onPress={handleBackButton}
          name="angle-left"
          size={30}
          color="white"
        />
       <Button
          onPress={handleApplyButton}
          style={{
            backgroundColor: "#5528D6",
            marginTop:15,
            marginRight:10,
            paddingHorizontal: 20,
            paddingVertical: 3,
            borderRadius: 5,
          }}
          labelStyle={{ color: "white" }}
        >
          Apply
        </Button>
      </View>
      <View style={styles.headerContainer}>
        <Button style={styles.resBtn} labelStyle={{ color: "black" }}>
          Reserved
        </Button>
        <Button style={styles.avaBtn} labelStyle={{ color: "white" }}>
          Availble
        </Button>
        <Button style={styles.selBtn} labelStyle={{ color: "white" }}>
          Selected
        </Button>
      </View>

      <RadioButton.Group
        onValueChange={(value) => setSelectedClass(value)}
        value={selectedClass}
      >
        <View style={styles.radioButtons}>
          <RadioButton.Item
            label="Class A"
            value="A"
            style={styles.button}
            labelStyle={{ color: "#14205d" }}
          />
          <RadioButton.Item
            label="Class B"
            value="B"
            style={styles.button}
            labelStyle={{ color: "#14205d" }}
          />
          <RadioButton.Item
            label="Class C"
            value="C"
            style={styles.button}
            labelStyle={{ color: "#14205d" }}
          />
        </View>
      </RadioButton.Group>
      <View style={styles.seatingContainer}>{renderSeats()}</View>
      <View style={styles.bagadgeContainer}>
        <View style={styles.bagadgeTextContainer}>
          <Text style={styles.bagadgeText}>Bagadge Weight</Text>
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            value={sliderValue}
            onValueChange={onSliderValueChange}
            style={{ width: 230, height: 40 }}
            minimumValue={0}
            maximumValue={100}
            step={1}
            minimumTrackTintColor="#0C0337"
            maximumTrackTintColor="white"
          />
          <View style={styles.sliderValue}>
            <Text style={styles.valueText}>{sliderValue}</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default TicketBookingDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0337",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
  },
  apply: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
    position: "absolute", 
    left: 10, 
    right: 3,
    top: 20,
    padding: 10,
    marginTop: 0,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    paddingHorizontal: 10,
  },
  resBtn: {
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 6,
  },
  avaBtn: {
    backgroundColor: "#777777",
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10,
  },
  selBtn: {
    backgroundColor: "#5528D6",
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 8,
  },
  seatingContainer: {
    flexDirection: "column",
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  seat: {
    margin: 10,
    padding: 13,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "lightgray",
  },
  selectedSeat: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#5528D6",
  },
  seatText: {
    color: "black",
  },
  selectedText: {
    color: "white",
  },
  radioButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderWidth: 1,
    margin: 2,
    backgroundColor: "white",
    borderRadius: 15,
    marginTop:10,
    marginBottom:10,
    borderWidth: 2,
    borderColor: "#5528D6",
    height: 50,
  },
  valueText: {
    fontSize: 18,
    marginBottom: 5,
    color: "white",
  },
  bagadgeContainer: {
    backgroundColor: "white",
    //#5528D6
    padding: 3,
    borderRadius: 5,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 280,
  },
  sliderValue: {
    borderRadius: 5,
    backgroundColor: "#0C0337",
    paddingLeft: 5,
    paddingRight: 5,
    // paddingBottom:3,
    paddingTop: 3,
  },
  bagadgeTextContainer: {
    backgroundColor: "#0C0337",
    margin: 5,
    padding: 5,
    borderRadius: 4,
  },
  bagadgeText: {
    fontSize: 15,
    margin: 5,
    color: "white",
  },
  bookedSeat: {
    backgroundColor: "#777777",
  },
});
