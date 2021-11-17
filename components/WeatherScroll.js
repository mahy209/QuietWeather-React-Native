import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native';

import moment from 'moment-timezone'

import FutureForecast from './FutureForecast'

const WeatherScroll = ({weatherData}) => {
    return(
        <ScrollView horizontal={true} style={styles.Scrolling}>
            <CurrentTemp1 data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
            <FutureForecast data={weatherData}/>
        </ScrollView>
    )
}

const CurrentTemp1 = ({data}) => {
    if(data && data.weather){
    const img = {uri: 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png'}
    return(
        <View style={styles.CurrentTempContainer}>
        <Image source={img} style={styles.image}/>
        <View style={styles.otherContainer}>
            <Text  style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
            <Text  style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
            <Text  style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
        </View>
        </View>
    )
}else{
    return( 
        <View>
        </View>
    ) 
}
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
        width: 450,
        height: 350,
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
        height: 60,
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
