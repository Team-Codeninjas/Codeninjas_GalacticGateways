import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import port2 from '../../assets/port2.jpg'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardOne = (props) => {


  const getImage = (imageName) => {
    switch(imageName) {
        case 'port1':
            return require('../../assets/port1.jpg');
        case 'port2':
            return require('../../assets/port2.jpg');
        case 'port3':
            return require('../../assets/port3.jpg');
        case 'port4':
          return require('../../assets/port4.jpg');
        case 'port5':
          return require('../../assets/port5.jpg');
    }
}

  return(
    <Card style={styles.container}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Cover style={styles.image} source={getImage(props.details.image)} />
    <Card.Content>
      <Text variant="bodyLarge"><Ionicons name="time-outline" size={18} color="black" /> Departure Time</Text>
      <Text variant="bodySmall">{props.details.deptTime}</Text>
      <Text variant="bodyLarge"><Entypo name="time-slot" size={18} color="black" /> Travel Time</Text>
      <Text variant="bodySmall"> {props.details.TravelTime}</Text>
      <Text variant="bodyLarge"> <FontAwesome name="money" size={20} color="black" /> Travel Fee</Text>
      <Text variant="bodySmall"> {props.details.TravelFee}</Text>
      <Text variant="bodyLarge"> <MaterialCommunityIcons name="space-station" size={20} color="black" /> Spaceport</Text>
      <Text variant="bodySmall"> {props.details.Spaceport}</Text>
    </Card.Content>
  </Card>
  )
};

const styles = StyleSheet.create({
    container:{
        width:171,
        borderWidth:2,
        borderColor:'#1975D3'
    },
    image:{
      height:130,
      width:167
    },
    
})

export default CardOne;