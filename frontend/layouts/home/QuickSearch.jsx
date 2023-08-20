import React, { useState, useRef } from "react";
import { View, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "../../components/common/CustomButton";
import CustomInput from "../../components/common/CustomInput";
import CustomLabel from "../../components/common/CustomLabel";

const passengersOptions = [
  { label: "Adults", value: "Adults" },
  { label: "Adults + Children", value: "Adults + Children" },
];

const QuickSearch = () => {
  const [selectedPassengers, setSelectedPassengers] = useState(null);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);
  const passengerPickerRef = useRef();

  function handlePickerOpen() {
    passengerPickerRef.current.focus();
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
        <CustomInput label="From (location)" />
      </View>
      <View style={styles.inputItem}>
        <CustomInput label="to (destination)" />
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
          onPress={handlePickerOpen}
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
      <CustomButton style={styles.button} title="find spaceship" />
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
