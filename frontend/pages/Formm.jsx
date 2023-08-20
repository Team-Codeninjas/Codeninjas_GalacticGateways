import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Entypo } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const numColumns = 3; // Number of columns in the first row
const screenWidth = Dimensions.get('window').width;

const Formm = () => {
  const schema = yup.object().shape({
    from: yup.string().required('From is required'),
    to: yup.string().required('To is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log('data');
  };

  const [showDepartureDate, setShowDepartureDate] = useState(false);
  const [showReturnDate, setShowReturnDate] = useState(false);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState(
    new Date()
  );
  const [selectedReturnDate, setSelectedReturnDate] = useState(new Date());

  const [showDepartureDate2, setShowDepartureDate2] = useState(false);
  const [showReturnDate2, setShowReturnDate2] = useState(false);
  const [selectedDepartureDate2, setSelectedDepartureDate2] = useState(
    new Date()
  );
  const [selectedReturnDate2, setSelectedReturnDate2] = useState(new Date());

  const onDepartureDateChange = (event, selectedDepartureDate) => {
    setShowDepartureDate(false);
    if (selectedDepartureDate !== undefined) {
      setSelectedDepartureDate(selectedDepartureDate);
    }
  };

  const onReturnDateChange = (event, selectedReturnDate) => {
    setShowReturnDate(false);
    if (selectedDepartureDate !== undefined) {
      setSelectedReturnDate(selectedReturnDate);
    }
  };

  const onDepartureDateChange2 = (event, selectedDepartureDate2) => {
    setShowDepartureDate2(false);
    if (selectedDepartureDate2 !== undefined) {
      setSelectedDepartureDate2(selectedDepartureDate2);
    }
  };

  const onReturnDateChange2 = (event, selectedReturnDate2) => {
    setShowReturnDate2(false);
    if (selectedReturnDate2 !== undefined) {
      setSelectedReturnDate2(selectedReturnDate2);
    }
  };

  return (
    <LinearGradient colors={['#0C0337', '#A660FF']}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <View> */}
        <Text style={styles.text}>From</Text>
        {/* </View> */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Controller
              control={control}
              name="from"
              render={({ field: { onChange, onBlur, value } }) => (
                <LinearGradient
                  colors={['#BD00FF', 'rgba(86, 0, 228, 0.69)']}
                  style={styles.gradient}
                >
                  <View style={{ paddingLeft: 15, paddingTop: 5 }}>
                    <TextInput
                      style={styles.text}
                      placeholderTextColor="white"
                      placeholder="From"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    <Text style={styles.errorMessage}>
                      {errors.from?.message}
                    </Text>
                  </View>
                </LinearGradient>
              )}
            />
          </View>
        </View>
        <View>
          <Text style={styles.text}>To</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Controller
              control={control}
              name="to"
              render={({ field: { onChange, onBlur, value } }) => (
                <LinearGradient
                  colors={['#BD00FF', 'rgba(86, 0, 228, 0.69)']}
                  style={styles.gradient}
                >
                  <View style={{ paddingLeft: 15, paddingTop: 5 }}>
                    <TextInput
                      style={styles.text}
                      placeholderTextColor="white"
                      placeholder="Destination"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    <Text style={styles.errorMessage}>
                      {errors.to?.message}
                    </Text>
                  </View>
                </LinearGradient>
              )}
            />
          </View>
        </View>
        <View>
          <Text style={styles.text}>Option 1</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.column, { paddingRight: 5 }]}>
            <Controller
              control={control}
              name="tripType"
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <LinearGradient
                    colors={['#BD00FF', 'rgba(86, 0, 228, 0.69)']}
                    style={styles.gradient}
                  >
                    <Picker
                      selectedValue={value}
                      onValueChange={onChange}
                      onBlur={onBlur}
                      mode="dropdown"
                      dropdownIconColor="white"
                    >
                      <Picker.Item label="Round Trip" value="Round Trip" />
                      <Picker.Item label="One Way Trip" value="One Way Trip" />
                    </Picker>
                  </LinearGradient>
                  <Text style={styles.errorMessage}>
                    {errors.tripType?.message}
                  </Text>
                </View>
              )}
            />
          </View>

          <View style={{ flex: 0.84 }}>
            <Controller
              control={control}
              name="class"
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <LinearGradient
                    colors={['#BD00FF', 'rgba(86, 0, 228, 0.69)']}
                    style={styles.gradient}
                  >
                    <Picker
                      selectedValue={value}
                      onValueChange={onChange}
                      onBlur={onBlur}
                      mode="dropdown"
                      dropdownIconColor="white"
                    >
                      <Picker.Item label="Economy" value="Economy" />
                      <Picker.Item label="Business" value="Business" />
                      <Picker.Item label="Premium" value="Premium" />
                      <Picker.Item label="First" value="First" />
                    </Picker>
                  </LinearGradient>

                  <Text style={styles.errorMessage}>
                    {errors.class?.message}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
        <View style={[styles.row, { paddingTop: 2 }]}>
          <View style={[styles.column, { paddingRight: 5 }]}>
            <LinearGradient
              colors={['#BD00FF', 'rgba(86, 0, 228, 0.69)']}
              style={styles.gradient}
            >
              <TouchableWithoutFeedback
                onPress={() => setShowDepartureDate(true)}
              >
                <View style={{ paddingLeft: 15, paddingTop: 5 }}>
                  <Entypo name="calendar" size={24} color="white" />
                  <TextInput
                    placeholder="Click to select date"
                    editable={false}
                    value={selectedDepartureDate.toLocaleDateString()}
                    style={styles.text}
                  />
                </View>
              </TouchableWithoutFeedback>
            </LinearGradient>

            {showDepartureDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={selectedDepartureDate}
                mode={'date'}
                is24Hour={true}
                onChange={onDepartureDateChange}
              />
            )}
          </View>
          <View style={styles.column}>
            <LinearGradient
              colors={['#BD00FF', 'rgba(86, 0, 228, 0.69)']}
              style={styles.gradient}
            >
              <TouchableWithoutFeedback onPress={() => setShowReturnDate(true)}>
                <View style={{ paddingLeft: 15, paddingTop: 5 }}>
                  <Entypo name="calendar" size={24} color="white" />
                  <TextInput
                    placeholder="Click to select date"
                    editable={false}
                    value={selectedReturnDate.toLocaleDateString()}
                    style={styles.text}
                  />
                </View>
              </TouchableWithoutFeedback>
            </LinearGradient>

            {showReturnDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={selectedReturnDate}
                mode={'date'}
                is24Hour={true}
                onChange={onReturnDateChange}
              />
            )}
          </View>
        </View>
        <View>
          <Text style={styles.text}>Option 2</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.column, { paddingRight: 5 }]}>
            <Controller
              control={control}
              name="tripType2"
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <LinearGradient
                    colors={['#BD00FF', 'rgba(86, 0, 228, 0.69)']}
                    style={styles.gradient}
                  >
                    <Picker
                      selectedValue={value}
                      onValueChange={onChange}
                      onBlur={onBlur}
                      mode="dropdown"
                      dropdownIconColor="white"
                    >
                      <Picker.Item label="Round Trip" value="Round Trip" />
                      <Picker.Item label="One Way Trip" value="One Way Trip" />
                    </Picker>
                  </LinearGradient>
                  <Text style={styles.errorMessage}>
                    {errors.tripType2?.message}
                  </Text>
                </View>
              )}
            />
          </View>

          <View style={{ flex: 0.84 }}>
            <Controller
              control={control}
              name="class2"
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <LinearGradient
                    colors={['#BD00FF', 'rgba(86, 0, 228, 0.69)']}
                    style={styles.gradient}
                  >
                    <Picker
                      selectedValue={value}
                      onValueChange={onChange}
                      onBlur={onBlur}
                      mode="dropdown"
                      dropdownIconColor="white"
                    >
                      <Picker.Item label="Economy" value="Economy" />
                      <Picker.Item label="Business" value="Business" />
                      <Picker.Item label="Premium" value="Premium" />
                      <Picker.Item label="First" value="First" />
                    </Picker>
                  </LinearGradient>

                  <Text style={styles.errorMessage}>
                    {errors.class2?.message}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
        <View style={[styles.row, { paddingTop: 2 }]}>
          <View style={[styles.column, { paddingRight: 5 }]}>
            <LinearGradient
              colors={['#BD00FF', 'rgba(86, 0, 228, 0.69)']}
              style={styles.gradient}
            >
              <TouchableWithoutFeedback
                onPress={() => setShowDepartureDate2(true)}
              >
                <View style={{ paddingLeft: 15, paddingTop: 5 }}>
                  <Entypo name="calendar" size={24} color="white" />
                  <TextInput
                    placeholder="Click to select date"
                    editable={false}
                    value={selectedDepartureDate2.toLocaleDateString()}
                    style={styles.text}
                  />
                </View>
              </TouchableWithoutFeedback>
            </LinearGradient>

            {showDepartureDate2 && (
              <DateTimePicker
                testID="dateTimePicker"
                value={selectedDepartureDate2}
                mode={'date'}
                is24Hour={true}
                onChange={onDepartureDateChange2}
              />
            )}
          </View>
          <View style={styles.column}>
            <LinearGradient
              colors={['#BD00FF', 'rgba(86, 0, 228, 0.69)']}
              style={styles.gradient}
            >
              <TouchableWithoutFeedback
                onPress={() => setShowReturnDate2(true)}
              >
                <View style={{ paddingLeft: 15, paddingTop: 5 }}>
                  <Entypo name="calendar" size={24} color="white" />
                  <TextInput
                    placeholder="Click to select date"
                    editable={false}
                    value={selectedReturnDate2.toLocaleDateString()}
                    style={styles.text}
                  />
                </View>
              </TouchableWithoutFeedback>
            </LinearGradient>

            {showReturnDate2 && (
              <DateTimePicker
                testID="dateTimePicker"
                value={selectedReturnDate2}
                mode={'date'}
                is24Hour={true}
                onChange={onReturnDateChange2}
              />
            )}
          </View>
        </View>
        <View style={{ width: screenWidth * 0.5, paddingTop: 20 }}>
          <Button
            title="Compare Trips"
            onPress={handleSubmit(onSubmit)}
            color="#5528D6"
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Formm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
  },
  row: {
    width: screenWidth * 0.95,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingTop: 20,
    paddingLeft: 15,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  column: {
    flex: 1,
  },
  gradient: {
    borderRadius: 15,
  },
  text: {
    color: 'white',
  },
  errorMessage: {
    color: '#fab9b9',
  },
});
