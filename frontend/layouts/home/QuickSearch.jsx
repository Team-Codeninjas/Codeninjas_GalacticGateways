import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "../../components/common/CustomButton";
import CustomLabel from "../../components/common/CustomLabel";

const passengersOptions = [
  { label: "Adults", value: "Adults" },
  { label: "Adults + Children", value: "Adults + Children" },
];

const locationsOptions = [
  { label: "Lagos", value: "Lagos" },
  { label: "Abuja", value: "Abuja" },
  { label: "Port Harcourt", value: "Port Harcourt" },
];

const QuickSearch = () => {
  const [selectedFromLocation, setSelectedFromLocation] = useState(null);
  const [selectedToLocation, setSelectedToLocation] = useState(null);
  const [selectedPassengers, setSelectedPassengers] = useState(null);

  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  
  const dataObject = {
    selectedFromLocation,
    selectedToLocation,
    selectedPassengers,
    departureDate,
    returnDate,
  
  };



  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);

  const passengerPickerRef = useRef();
  const fromLocationPickerRef = useRef();
  const toLocationPickerRef = useRef();

  function handlePassengerPickerOpen() {
    passengerPickerRef.current.focus();
  }

  function handleFromLocationPickerOpen() {
    fromLocationPickerRef.current.focus();
  }

  function handleToLocationPickerOpen() {
    toLocationPickerRef.current.focus();
  }

  const handleDepartureChange = (event, selectedDate) => {
    const currentDate = selectedDate || departureDate;
    setShowDeparturePicker(false);
    setDepartureDate(currentDate);
  };

  const handleReturnChange = (event, selectedDate) => {
    const currentDate = selectedDate || returnDate;
    setShowReturnPicker(false);
    setReturnDate(currentDate);
  };

  return (
    <View style={styles.quickSearch}>
      <View style={styles.inputItem}>
        <CustomLabel
          label="From (location)"
          text={selectedFromLocation ? `${selectedFromLocation}` : "select location"}
          onPress={handleFromLocationPickerOpen}
        />
        <Picker
          ref={fromLocationPickerRef}
          selectedValue={selectedFromLocation}
          onValueChange={(itemValue, itemIndex) => setSelectedFromLocation(itemValue)}
          style={{ height: 50, width: 150, display: "none" }}
        >
          {locationsOptions.map((option, index) => (
            <Picker.Item key={index} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>
      <View style={styles.inputItem}>
        <CustomLabel
          label="To (Destination)"
          text={selectedToLocation ? `${selectedToLocation}` : "select location"}
          onPress={handleToLocationPickerOpen}
        />
        <Picker
          ref={toLocationPickerRef}
          selectedValue={selectedToLocation}
          onValueChange={(itemValue, itemIndex) => setSelectedToLocation(itemValue)}
          style={{ height: 50, width: 150, display: "none" }}
        >
          {locationsOptions.map((option, index) => (
            <Picker.Item key={index} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>

      <View style={styles.dateItemContainer}>
        <View style={styles.dateItem}>
          <CustomLabel
            label="Departure"
            text={departureDate.toDateString()}
            onPress={() => setShowDeparturePicker(true)}
          />
          {showDeparturePicker && (
            <DateTimePicker
              value={departureDate}
              mode="date"
              display="default"
              onChange={handleDepartureChange}
            />
          )}
        </View>
        <View style={styles.dateItem}>
          <CustomLabel
            label="return"
            text={returnDate.toDateString()}
            onPress={() => setShowReturnPicker(true)}
          />
          {showReturnPicker && (
            <DateTimePicker
              value={returnDate}
              mode="date"
              display="default"
              onChange={handleReturnChange}
            />
          )}
        </View>
      </View>

      <View>
        <CustomLabel
          label="Passengers"
          text={selectedPassengers ? `${selectedPassengers}` : "select passengers"}
          onPress={handlePassengerPickerOpen}
        />
        <Picker
          ref={passengerPickerRef}
          selectedValue={selectedPassengers}
          onValueChange={(itemValue, itemIndex) => setSelectedPassengers(itemValue)}
          style={{ height: 50, width: 150, display: "none" }}
        >
          {passengersOptions.map((option, index) => (
            <Picker.Item key={index} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>

      <CustomButton style={styles.button} title="find spaceship"   onFindSpaceship={dataObject} />
    </View>
  );
};

const styles = StyleSheet.create({
  quickSearch: {
    position: "absolute",
    top: "20%",
    backgroundColor: "#070226",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 23,
    width: "100%",
  },
  dateItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  inputItem: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});

export default QuickSearch;
