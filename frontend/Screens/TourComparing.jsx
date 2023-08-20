import { View, ScrollView, StyleSheet } from "react-native";
import TourCard from "../components/card";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useEffect } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Image } from "react-native";

import rocketImage from "../assets/rocket.png"

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
            type: 'express',
            image: 'port1'
        },
        {
            deptTime: '11:05PM - 11:15PM',
            TravelTime: '7 days 12 hours',
            TravelFee: '$2,250,000,000',
            type: 'interplanet',
            image: 'port2'
        },
        {
            deptTime: '10:55PM - 11:15PM',
            TravelTime: '7 days 12 hours',
            TravelFee: '$2,250,000,000',
            type: 'express',
            image: 'port3'
        },
        {
            deptTime: '9.00AM - 9.15AM',
            TravelTime: '6 days 6 hours',
            TravelFee: '$ 930,000,000',
            type: 'interplanet',
            image: 'port4'
        },
        {
            deptTime: '2.00PM - 2.15PM',
            TravelTime: '10 days 6 hours',
            TravelFee: '$4,930,000,000',
            type: 'express',
            image: 'port5'
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
        for (let i = 0; i < 2; i++) {
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
                <View style={{top:15}}>
                    <Image source={rocketImage} style={{ width: 100, height: 100 }} />
                </View>
                <View style={{top:15}}>
                    <View>
                        <Text variant="headlineMedium" style={style.upperTextContainer}>Compare and Tour</Text>
                    </View>
                    <View>
                        <Text variant="labelMedium">Discover.Decide.Depart</Text>
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
                <View style={{ marginBottom: 10 }}>
                    <Button mode="outlined" onPress={() => { setLoadMore(true) }} style={style.button} theme={{ colors: { primary: 'white' } }}><AntDesign name="reload1" size={18} color="white" />  Load More</Button>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        width: 200,
        borderColor: 'white',
        color: 'white'
    },
    upperContainer: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#8E44AD',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop:20
    },
    upperTextContainer: {
        color: 'white',
        fontWeight: '900'
    },
    text: {
        color: 'white',
    },
    bottomContainer: {
        flex: 1.2,
        backgroundColor: '#8E44AD',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardArrayContainer: {
        flex: 8,
        backgroundColor: ' #301934',
        alignItems: 'center'
    },
    cardArrayInnerContainer: {
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
        flexWrap: 'wrap',
    },
    outerContainer: {
        flex: 1,
        backgroundColor: '#301934'
    }
})

export default TourComparing;
