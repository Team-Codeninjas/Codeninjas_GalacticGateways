import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, View,Text } from 'react-native';
import backimage from "../images/background.jpg";

const Details = () => {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.containerrr}> 
      <ImageBackground source={backimage}  style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Trip Details</Text>
      </View>
      <View style={styles.bottom}>
       <View style={styles.middle}>

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
    height:screenHeight*0.7,
    width:screenWidth*0.8,
  }
});

export default Details;
