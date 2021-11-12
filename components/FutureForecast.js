import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';

const FutureForecast = () => {
    return (
        <View style={styles.flexi}>
            <FutureForecastitem />
            <FutureForecastitem />
            <FutureForecastitem />
            <FutureForecastitem />
        </View>
    )
}

const FutureForecastitem = () => {
    const img = require ("../assets/snowy-sunny.png")
    return (
        <View style={styles.FutureForecastitemContainer}>
            <Text style={styles.day}> Mon </Text>
            <Image source={img} style={styles.image}/>
            <Text style={styles.temp}>Night- 21&#x2103;</Text>
            <Text style={styles.temp}>Day- 30&#x2103;</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    flexi:{
        flexDirection: "row",
    },
    image:{
        width: 100,
        height: 100,
        left: 20.9,
    },
    FutureForecastitemContainer:{
        flex: 1,
        width: 200,
        height: 300,
        justifyContent: "center",
        backgroundColor: "#00000033",
        borderColor: "#9D9A9A",
        borderRadius: 10,
        borderWidth: 5,
        padding: 20,
        marginLeft: 10,
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
        height: 60,
        left: 54.1,
        top: 854,
        lineHeight: 30,
        textAlign: "left",

    },
})
export default FutureForecast
