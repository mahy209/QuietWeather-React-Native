import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';

import moment from 'moment-timezone'

const FutureForecast = ({data}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {
                data && data.length > 0 ? 
                data.map((data, idx) => (
                    idx !== 0 &&  <FutureForecastitem key={idx} forecastItem={data}/>
                ))
                :
                <View/>
            }
        </View>
    )
}

const FutureForecastitem = ({forecastItem}) => {
    const img = {uri: "http://openweathermap.org/img/wn/"+forecastItem.weather[0].icon+"@2x.png"}
    return (
        <View  style={styles.FutureForecastitemContainer}>
            <Text  style={styles.day}>{moment(forecastItem.dt * 1000).format('ddd')}</Text>
            <Image source={img} style={styles.image} />
            <Text  style={styles.temp}>Night - {forecastItem.temp.night}&#176;C</Text>
            <Text  style={styles.temp}>Day - {forecastItem.temp.day}&#176;C</Text>
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
        left: 40,
    },
    FutureForecastitemContainer:{
        flex: 1,
        width: 220,
        height: 350,
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
        height: 60,
        top: 725,
        padding: 10,
        textAlign: "center",
        borderRadius: 50,
        fontWeight: "bold",
        marginBottom: 25,
    },
    temp:{
        fontSize: 20,
        margin: 10,
        color: "white",
        fontWeight: "300",
        left: 40,
        top: 854,
        textAlign: "left",

    },
})
export default FutureForecast
