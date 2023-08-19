import React, { useState } from "react";
import {
  View,
  Text,
  Image,SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import backimage from "../images/background.jpg"

// import { Link } from "expo-router";
import CustomImageCarousalSquare from '../components/CustomImageCarousalSquare';


const Payment = () => {
  const [base_fare, setbase_fare] = useState(3000);
  const [travelTaxrate, settravelTaxrate] = useState(0.2);
  const [spaceportfee, setspaceportfee] = useState(3000);
  const [meals, setmeals] = useState(3000);
  const [currimages, setcurrImages] = useState([
    { currency: 'Universal Dollors', Image: require('../assets/usd.png') ,balance:"1240"},
    { currency: 'Astro Bucks', Image: require('../assets/as.png') ,balance:"550"},
    { currency: 'Nebula Tokens', Image:  require('../assets/nt.png'),balance:"1356" },
    { currency: 'Space Tokens', Image: require('../assets/st.png'),balance:"4563" }
    // Add more items as needed
  ]);
  const [cryptoimages, setcryptoImages] = useState([


    { currency: 'Bitcoin', Image: require('../assets/bitcoin.png'),balance:"0.01223" },
    { currency: 'Ethereum', Image: require('../assets/ethereum.png'),balance:"0.2" },
    { currency: 'Litecoin', Image:  require('../assets/litecoin.png') ,balance:"1"},
  
  ]);

  return (
    <View > 
    <ImageBackground source={backimage} resizeMode="cover" style={styles.image}>
  
      <View style={styles.container}>
        <Text style={styles.textStyle}>Payment Methods</Text>
      </View>
      <View style={styles.bottom}>
      <View style={styles.middle}>
        <View>
            <Text style={styles.currencyText}>Universal currency</Text>
        </View>
        <View>
            <View style={styles.currency}>
          
        <View style={styles.carouselContainer}>
     
          <CustomImageCarousalSquare
            data={currimages}
           
          />
        </View>
       
      


            </View>
            
        </View>
        </View>

        <View style={styles.middle}>
        <View>
            <Text style={styles.currencyText}>Crypto currency</Text>
        </View>
        <View>
            <View style={styles.currency}>
            <View style={styles.carouselContainer}>
     
     <CustomImageCarousalSquare
       data={cryptoimages}
      
     />
   </View>
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
const styles = StyleSheet.create({
  container: {
    width: "100%",
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

    // flex: 1
  }, middle: {
justifyContent:"space-evenly",
    height: screenHeight * 0.35,
    width: "100%",
   
  },currency:{
    height: screenHeight * 0.25,
    width:"100%",
    backgroundColor: "rgba(255, 255, 255, 0.60)",
    justifyContent:"center",

   

  },currencyText:{
    color: '#FFF',
    fontFamily: 'Lato',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '900',
    marginLeft:10,
  }
});

export default Payment;
