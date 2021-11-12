import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native';

import FutureForecast from './FutureForecast'

const WeatherScroll = () => {
    return(
        <ScrollView horizontal={true} style={styles.Scrolling}>
            <CurrentTemp1/>
            <FutureForecast/>
        </ScrollView>
    )
}

const CurrentTemp1 = () => {
    const img = require ("../assets/sun.png")
    return(
        <View style={styles.CurrentTempContainer}>
        <Image source={img} style={styles.image}/>
        <View style={styles.otherContainer}>
        <Text style={styles.day}>Sunday</Text>
        <Text style={styles.temp}>Night- 28&#x2103;</Text>
        <Text style={styles.temp}>Day- 28&#x2103;</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Scrolling:{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: 50,
        flex: 0.4,
    },
    image: {
        width: 200,
        height: 200
    },
    CurrentTempContainer:{
        flexDirection: "row",
        width: 400,
        height: 300,
        backgroundColor: "#00000033",
        borderColor: "grey",
        borderRadius: 10,
        borderColor: "#9D9A9A",
        borderWidth: 5,
        justifyContent: "center",
        alignitems: "center",
        padding: 20,
    },
    day:{
        fontSize: 24,
        color: "white",
        backgroundColor: "#313131",
        width: 145,
        height: 60,
        left: 253.5,
        top: 725,
        padding: 10,
        textAlign: "center",
        borderRadius: 50,
        fontWeight: "bold",
        marginBottom: 25,
    },
    temp:{
        fontSize: 24,
        margin: 10,
        color: "white",
        fontWeight: "300",
        width: 78,
        height: 60,
        left: 285,
        top: 798,
        lineHeight: 30,
        textAlign: "left",

    },
    otherContainer:{
        paddingRight: 60,
    }
})

export default WeatherScroll
