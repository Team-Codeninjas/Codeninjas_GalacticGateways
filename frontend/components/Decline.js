import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet ,TouchableWithoutFeedback,TouchableOpacity,Image} from 'react-native';

const Decline = ({modalVisible,onClose,currency}) => {

    const[proceedstatus,setproceed]=useState(false);
    const proceed=()=>{
        setproceed(true);

    }
    return (
        <Modal animationType="fade" transparent={true} visible={modalVisible} >
   <View style={styles.centeredModal}>
    <View style={styles.modalContent}>
           
           <View style={styles.closeButtonview}>

            <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.close}><Text style={styles.closeButton}>X</Text></View>

            </TouchableWithoutFeedback>
           
           
           </View>
           <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <Image
              source={require("../assets/warning.png")}
              style={styles.imageStyle}
            />
           <Text style={styles.text}>Warning!</Text>

           <View style={{paddingTop:10,display:'flex',alignItems:'center'}}>

           <Text style={styles.textchprice}>Payment Declined !</Text>
           </View>

           </View>
           <View>
           
           </View>
           <View style={{display:'flex',justifyContent:'center',alignItems:'center',height:"40%"}} >
          <TouchableOpacity style={styles.buttonContainer} onPress={proceed} >
      <Text style={styles.buttonText}>CONFIRM</Text>
    </TouchableOpacity>
          </View>
          </View>
         
        
        </View>
      </Modal>
        
    );
}

export default Decline;

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    imageContainer: {
      borderRadius: 34,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: undefined,
      aspectRatio: 14 / 9,
      borderWidth: 2,
      // borderColor:"#AA047C",
      // borderRadius: 34,
    },
    centeredModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalContent: {
        backgroundColor: "rgba(0,0,0,0.9)",
        borderRadius: 10,
        borderColor:"#AA047C",
        borderWidth:3,
        padding: 20,
        width: screenWidth * 0.8, // Adjust the width as needed
        height: screenHeight * 0.45,// Adjust the height as needed
      },
      // 
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    closeButton: {
      fontSize: 18,
      color: "white",
      fontWeight:"bold",
      
    },closeButtonview:{
        position: "absolute",
    top: 0,
    right:0,
    padding: 10,
    zIndex: 1,
    },
    
    modalImage: {
      width: 200,
      height: 200,
      borderRadius: 10,
    },text:{
        paddingTop:10,
        color:"#334D8F",
        fontSize:25, fontWeight: "bold", 
       

    },
    textch:{
        paddingTop:10,
        color:"#dfc5fe",
        fontSize:30,
        fontWeight: "bold", 

    },textchprice:{paddingTop:10,
        color:"white",
        fontFamily: 'Roboto',
        fontSize:20,
        fontWeight: "bold", textAlign: "center",},
    buttonContainer: {
        display: 'flex',
        width: 178,
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 6,
        backgroundColor: '#AA047C',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },close:{
        width:30,display:'flex',justifyContent:'center',alignItems:'center'
              }
  });
  
