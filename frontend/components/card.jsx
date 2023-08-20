import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { Dimensions, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const TourCard = (props) => {


  const getImage = (imageName) => {
    switch (imageName) {
      case 'port1':
        return require('../assets/port1.jpg');
      case 'port2':
        return require('../assets/port2.jpg');
      case 'port3':
        return require('../assets/port3.jpg');
      case 'port4':
        return require('../assets/port4.jpg');
      case 'port5':
        return require('../assets/port5.jpg');
    }
  }

  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Cover style={styles.image} source={getImage(props.details.image)} />
        <Card.Content>
          <View style={styles.textContainer}>
            <View style={styles.text}>
              <Text variant="titleMedium" style={styles.textContainer}><Entypo name="time-slot" size={18} color="black" /> Travel Time</Text>
              <Text variant="bodySmall" style={styles.textContainer}> {props.details.TravelTime}</Text>
            </View>
            <View style={styles.text}>
              <Text variant="titleMedium"> <FontAwesome name="money" size={20} color="black" /> Travel Fee</Text>
              <Text variant="bodySmall"> {props.details.TravelFee}</Text>
            </View>
          </View>
          <Card.Actions>
            <View style={{ backgroundColor: 'yello' }}>
              <Text variant="bodySmall" style={styles.typeText}>{props.details.type}</Text>
            </View>
          </Card.Actions>
        </Card.Content>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.85,
    marginBottom: 10,
    marginTop: 10
  },
  cardContainer: {
    borderWidth: 2,
    borderColor: '#8E44AD',
  },
  image: {
    height: windowHeight * 0.165,
    width: windowWidth * 0.84
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    //backgroundColor:'yellow',
    flex: 1
  },
  text: {
    textAlign: 'center',
    padding: 15
  }
  ,typeText:{
    backgroundColor:'#8E44AD',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:20,
    color:'white'
  }
})

export default TourCard;