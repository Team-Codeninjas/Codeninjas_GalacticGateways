import React, { useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, View,Text } from 'react-native';
import backimage from "../images/background.jpg";

const Details = () => {
  
  const[recepino,setrecepino] = useState("TRW3123");
  const[datetime,setdatetime] = useState("2023-04-04 15.50 UTC");
  const[payment,setpayment] = useState("3000 Universal Dollors");
const[depature,setdepature] = useState("Earth Spaceport Alpha");
  const[arrival,setarrival] = useState("Kepler Station Theta");
const[deptimedate,setdeptimedate] = useState("2023-08-15 08:00 UTC");
const[arrtimedate,setarrtimedate] = useState("2023-08-16 12:00 UTC");

  const[shuttle,setshuttle] = useState("Stellar Cruiser 3000");
  return (
    <View style={styles.containerrr}> 
      <ImageBackground source={backimage}  style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Trip Details</Text>
      </View>
      <View style={styles.bottom}>
       <View style={styles.middle}>
        {/* one section */}
        <View >
        <View style={styles.left}>
          <Text style={styles.detailstextblack}>Recipt Number:</Text>
        </View>
        <View style={styles.right}>
        <Text style={styles.detailstextblack}>{recepino}</Text>

        </View>
        </View>
          {/* one section */}
          <View>
        <View style={styles.left}>
          <Text style={styles.detailstext}>Date:</Text>
        </View>
        <View style={styles.right}>
        <Text style={styles.detailstext}>{datetime}</Text>

        </View>
        </View>
          {/* one section */}
          <View>
        <View style={styles.left}>
          <Text style={styles.detailstextblack}>Payment:</Text>
        </View>
        <View style={styles.right}>
        <Text style={styles.detailstextblack}>{payment}</Text>

        </View>
        </View>
          {/* one section */}
          <View>
        <View style={styles.left}>
          <Text style={styles.detailstext}>Depature:</Text>
        </View>
        <View style={styles.right}>
        <Text style={styles.detailstext}>{depature}</Text>

        </View>
        </View>
          {/* one section */}
          <View>
        <View style={styles.left}>
          <Text style={styles.detailstextblack}>Arrival:</Text>
        </View>
        <View style={styles.right}>
        <Text style={styles.detailstextblack}>{arrival}</Text>

        </View>
        </View>
          {/* one section */}
          <View>
        <View style={styles.left}>
          <Text style={styles.detailstext}>Departure-Date & Time:</Text>
        </View>
        <View style={styles.right}>
        <Text style={styles.detailstext}>{deptimedate}</Text>

        </View>
        </View>
          {/* one section */}
          <View>
        <View style={styles.left}>
          <Text style={styles.detailstextblack}>Arrival-Date & Time:</Text>
        </View>
        <View style={styles.right}>
        <Text style={styles.detailstextblack}>{arrtimedate}</Text>

        </View>
        </View>
          {/* one section */}
          <View>
        <View style={styles.left}>
          <Text style={styles.detailstext}>Shuttle:</Text>
        </View>
        <View style={styles.right}>
        <Text style={styles.detailstext}>{shuttle}</Text>

        </View>
        </View>

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
  
  bottom: {
    display: "flex",
    alignItems: "center",
    height: screenHeight * 0.82,
    paddingTop:screenWidth*0.05,
    justifyContent:'center',

    // flex: 1
  },
  containerrr: {
    flex: 1, // Ensure the container takes the full screen
  },
  imageBackground: {
    flex: 1, // Ensure the image background takes the full screen
    resizeMode: 'cover', // Adjust this based on your needs
  },middle:{
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    height:screenHeight*0.8,
    width:screenWidth*0.85,
    padding:10,
  },left:{
backgroundColor:"rgba(170, 4, 124, 0.5)",
height:screenHeight*0.04,
width:screenWidth*0.45,
marginBottom:5,
padding:2,

  },right:{
    backgroundColor:"rgba(170, 4, 124, 0.5)",
    height:screenHeight*0.04,
    width:screenWidth*0.45,
marginBottom:5,
padding:2,

display:'flex',
flexDirection:'row',
marginLeft:screenWidth*0.34,



  },detailstext:{
    color:"white",
    fontWeight:'bold',

  }
  ,detailstextblack:{
    color:"black",
    fontWeight:'bold',

  }
});

export default Details;
