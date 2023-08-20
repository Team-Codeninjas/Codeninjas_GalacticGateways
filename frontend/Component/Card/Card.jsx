import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardOne = (props) => {

  console.log(props);
  //const startTime = 
  return(
    <Card style={styles.container}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Cover style={styles.image} source={{ uri: 'https://picsum.photos/700' }} />
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