import React, {useEffect,useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';

import moment from 'moment-timezone'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const WeatherItem = ({title,value,unit}) => {
    return(
        <View style={styles.WeatherItem}>
            <Text style={styles.WeatherItemTitle}>{title}</Text>
            <Text style={styles.WeatherItemValue}>{value}{unit}</Text>
        </View>
    )
}
const DateTime = ({current, lat, lon, timezone}) => {
    const [date, setDate] = useState ('')
    const [time, setTime] = useState ('')

    useEffect (() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hourshorizontalFormat = hour >= 13 ? hour %12: hour;
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? 'PM': 'AM';

            setTime((hourshorizontalFormat < 10? '0'+ hourshorizontalFormat : hourshorizontalFormat) 
            + ':' + (minutes < 10? '0' + minutes : minutes) + '' + ampm)

            setDate(days[day] + ', ' + date + ' ' + months[month])

        },1000);
    }, [])
    return(
    <View style={styles.container}>
        <View>
            <View>
                <Text style={styles.heading}>{time}</Text>
            </View>
            <View>
            <Text style={styles.subheading}>{date}</Text>
            </View>
            <View style={styles.WeatherItemContainer}>
            <WeatherItem title="Humidity" value={current? current.humidity : ""} unit="%"/>
            <WeatherItem title="Pressure" value={current? current.pressure : ""} unit="hPA"/>
            <WeatherItem title="Sunrise" value={current? moment.tz(current.sunrise * 1000, timezone ).format('HH:mm'): ""} unit="AM"/>
            <WeatherItem title="Sunset" value={current? moment.tz(current.sunset * 1000, timezone ).format('HH:mm') : ""} unit="PM"/>
            </View>
        </View>
        <View>
            <View style={styles.rightAlign}>
                <Text style={styles.timeZone}>{timezone}</Text>
                <Text style={styles.locationZone}>{lat}N {lon}E</Text>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    heading:{
        fontSize:56,
        color:"#FFFFFF",
        fontWeight: "100",
        paddingTop: 10,
        marginLeft: "20px",
        left: 38.31,
        top: 50,
    },
    subheading: {
        fontSize: 26,
        color:"#FFFFFF",
        fontWeight: "400",
        paddingBottom: 8,
        marginLeft: "20px",
        left: 50,
        top: 135,
    },
    rightAlign:{
        textAlign: "right",
        marginTop: "30px",
    },
    timeZone:{
        fontSize: 20,
        color: "#FFFFFF",
        padding: 8,
        marginLeft: "20px",
        left: 324.5,
        top: 73.76,
    },
    locationZone:{
        fontSize: 20,
        color: "#FFFFFF",
        fontWeight: "400",
        padding: 10,
        marginLeft: "10px",
        left: 379,
        top: 109.02,
    },
    WeatherItemContainer:{
        width: 200,
        height: 140,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: 10,
        padding: 15,
        marginLeft: "40px",
    },
    WeatherItem:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    WeatherItemTitle:{
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "100",
    },
    WeatherItemValue:{
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "100",
    }
})

export default DateTime