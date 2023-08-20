import { View, ScrollView, StyleSheet } from "react-native";
import TourCard from "../component/card";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useEffect } from "react";
const TourComparing = () => {
    const [loadMore, setLoadMore] = useState(false);

    const cardArray = new Array();

    useEffect(() => {
        setLoadMore(false);
    }, [])

    const cards = [
        {
            deptTime: '10:55PM - 11:15PM',
            TravelTime: '9 days 5  hours',
            TravelFee: '$3,000,000,000',
            Spaceport: 'Jupiter-Citadal',
            image:'port1'
        },
        {
            deptTime: '11:05PM - 11:15PM',
            TravelTime: '7 days 12 hours',
            TravelFee: '$2,250,000,000',
            Spaceport: 'Mars-vemus',
            image:'port2'
        },
        {
            deptTime: '10:55PM - 11:15PM',
            TravelTime: '7 days 12 hours',
            TravelFee: '$2,250,000,000',
            Spaceport: 'Uranus-vivan',
            image:'port3'
        },
        {
            deptTime: '9.00AM - 9.15AM',
            TravelTime: '6 days 6 hours',
            TravelFee: '$ 930,000,000',
            Spaceport: 'Zerpa-novex',
            image:'port4'
        },
        {
            deptTime: '2.00PM - 2.15PM',
            TravelTime: '10 days 6 hours',
            TravelFee: '$4,930,000,000',
            Spaceport: 'Xorse-zampa',
            image:'port5'
        }
    ];

    if (loadMore) {
        for (let i = 0; i < cards.length; i++) {
            cardArray.push(
                <View style={style.card}>
                    <TourCard details={cards[i]} />
                </View>
            )
        }
    } else {
        for (let i = 0; i < 4; i++) {
            cardArray.push(
                <View style={style.card}>
                    <TourCard details={cards[i]} />
                </View>
            )
        }
    }


    return (
        <View style={style.outerContainer}>
            <View style={style.upperContainer}>
                <View style={{ flex: 1}}>
                    <View style={style.upperIconContainer}>
                        <View>
                            <Ionicons name='rocket' size={32} color='white' />
                        </View>
                        <View>
                            <Text variant="titleMedium" style={style.text}>  Tour One</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex:1 }}>
                    <View style={style.upperIconContainer}>
                        <View>
                            <Ionicons name='rocket' size={32} color='white' />
                        </View>
                        <View>
                            <Text variant="titleMedium" style={style.text}>  Tour Two</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={style.cardArrayContainer}>
                <View>
                    <ScrollView >
                        <View style={style.cardArrayInnerContainer}>
                            {cardArray}
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={style.bottomContainer}>
                <View>
                    <Button mode="contained" onPress={() => { setLoadMore(true) }} style={style.button}>
                        Load More
                    </Button>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        marginHorizontal: 12,
        marginVertical: 7
    },
    button: {
        width: 200,
        backgroundColor: '#0C0337'
    },
    upperContainer: {
        flex: 1.25,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#1975D3',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        alignItems: 'center',
        alignContent: 'center',
    },
    upperIconContainer:{
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    text: {
        color: 'white',
    },
    bottomContainer: {
        flex: 0.7, 
        backgroundColor: '#1975D3', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    cardArrayContainer:{
        flex: 8, 
        backgroundColor: '#0C0337' 
    },
    cardArrayInnerContainer:{
        flex: 1, 
        flexDirection: 'row', 
        display: 'flex',
        flexWrap: 'wrap'
    },
    outerContainer:{
        flex: 1, 
        backgroundColor: '#0C0337' 
    }
})

export default TourComparing;
