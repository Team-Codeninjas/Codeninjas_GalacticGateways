import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { Link } from "expo-router";
import backimage from "../../images/background.jpg";
const ChargesPage = ({navigation}) => {
  const [base_fare, setbase_fare] = useState(3000);
  const [travelTaxrate, settravelTaxrate] = useState(0.2);
  const [spaceportfee, setspaceportfee] = useState(300);
  const [meals, setmeals] = useState(500);

  return (
    <View style={styles.containerrr}> 
      <ImageBackground source={backimage}  style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Charges For Your Trip</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.middle}>
          <View style={styles.additionalView}>
            <Image
              source={require("../../images/Icons.png")}
              style={styles.imageStyle}
            />
            <View style={styles.adition}>
              <View>
                <Text style={styles.additionalText}>Base Fare</Text>
              </View>
              <View>
                <Text style={styles.additionalText}>${base_fare}</Text>
              </View>
            </View>
          </View>
          <View style={styles.additionalView}>
            <Image
              source={require("../../images/Group.png")}
              style={styles.imageStyle}
            />
            <View style={styles.adition}>
              <Text style={styles.additionalText}>
                Intergalactic Travel Tax
              </Text>
              <Text style={styles.additionalText}>
                ${travelTaxrate * base_fare}
              </Text>
            </View>
          </View>
          <View style={styles.additionalView}>
            <Image
              source={require("../../images/Road_alt_fill.png")}
              style={styles.imageStyle}
            />
            <View style={styles.adition}>
              <Text style={styles.additionalText}>Spaceport Fee</Text>
              <Text style={styles.additionalText}>${spaceportfee}</Text>
            </View>
          </View>
          <View style={styles.additionalView}>
            <Image
              source={require("../../images/Orange.png")}
              style={styles.imageStyle}
            />
            <View style={styles.adition}>
              <Text style={styles.additionalText}>In-Flight Meals</Text>
              <Text style={styles.additionalText}>${meals}</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.total}>
            <Text style={styles.totaltext}>Total</Text>
            <Text style={styles.totalprice}>
              ${base_fare + travelTaxrate * base_fare + spaceportfee + meals}
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate("Payment")}>  
            <LinearGradient
              colors={["#BD00FF", "rgba(86, 0, 228, 0.69)"]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Proceed to pay</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
};
const COLORS = {
  primaryDarkGradient: "red",
};

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight * 0.18,
    flexShrink: 0,
    backgroundColor: "rgba(0, 0, 0, 0.60)",
    borderBottomWidth: 1,
    borderColor: "#AA047C",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    display: "flex",
    justifyContent: "center",
    
  },
  textStyle: {
    color: "#FFF",
    fontFamily: "Lato",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: 32,
    marginTop: 20,
    marginLeft: 20,
  },
  additionalView: {
    flexDirection: "row", // Align items in a row
    alignItems: "center",
    width: screenWidth*0.9,
    padding: screenWidth*0.03,

    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#AA047C",
    backgroundColor: "#0C0337",
  },
  additionalText: {
    color: "#FFF",
    fontFamily: "Lato",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "900",
  },
  adition: {
    width: "90%",

    display: "flex",
    flexDirection: "row", // Align items in a row
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
  },
  bottom: {
    display: "flex",
    alignItems: "center",
    height: screenHeight * 0.82,
    paddingTop:screenWidth*0.05,

    // flex: 1
  },
  middle: {
    flexDirection: "column",
    justifyContent: "space-evenly", // Space between views evenly
    alignItems: "center",
    height: screenHeight * 0.45,
    width: "100%",
  },
  total: {
    width: screenWidth*0.6,
    padding: screenWidth*0.04,
    marginTop: screenWidth*0.08,

    flexDirection: "row", // Align items in a row
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
    borderWidth: 5,
    borderColor: "#0C0337",
    backgroundColor: "rgba(170, 4, 124, 0.84)",
  },
  totaltext: {
    marginLeft: screenWidth*0.04,
    color: "#000",
    fontFamily: "Lato",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "900",
  },
  totalprice: {
    marginRight: screenWidth*0.04,
    color: "#000",
    fontFamily: "Lato",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "900",
  },
  buttonContainer: {
    marginTop: screenWidth*0.1,
  },
  button: {
    width: 301,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    // Drop shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    color: "#0C0337",
    fontFamily: "Lato",
    fontSize: 19,
    fontWeight: "900",
  },
  imageStyle: {
    width: 25,
    height: 25,
  },
  containerrr: {
    flex: 1, // Ensure the container takes the full screen
  },
  imageBackground: {
    flex: 1, // Ensure the image background takes the full screen
    resizeMode: 'cover', // Adjust this based on your needs
  },
});

export default ChargesPage;
