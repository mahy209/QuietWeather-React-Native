import React from 'react'
import {View, Text, StyleSheet} from 'react-native';


const WeatherItem = ({title,value,unit}) => {
    return(
        <View style={styles.WeatherItem}>
            <Text style={styles.WeatherItemTitle}>{title}</Text>
            <Text style={styles.WeatherItemValue}>{value}{unit}</Text>
        </View>
    )
}
const DateTime = () => {
    return(
    <View style={styles.container}>
        <View>
            <View>
                <Text style={styles.heading}>12:30AM</Text>
            </View>
            <View>
            <Text style={styles.subheading}>Monday, June 7</Text>
            </View>
            <View style={styles.WeatherItemContainer}>
                <WeatherItem title="Humidity" value="50" unit="%" />
                <WeatherItem title="pressure" value="1000" unit="hPA" />
                <WeatherItem title="sunrise" value="06:00" unit="AM"/>
                <WeatherItem title="sunset" value="06:30" unit="PM"/>
            </View>
        </View>
        <View>
            <View style={styles.rightAlign}>
                <Text style={styles.timeZone}>Egypt/Alexandria</Text>
                <Text style={styles.locationZone}>4.22N 5DE</Text>
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
        fontFamily: "Scada",
        padding: 10,
    },
    heading:{
        fontSize:64,
        color:"#FFFFFF",
        fontWeight: "100",
        paddingTop: 10,
        marginLeft: "30px",
    },
    subheading: {
        fontSize: 30,
        color:"#FFFFFF",
        fontWeight: "400",
        paddingBottom: 8,
        marginLeft: "30px",
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
    },
    locationZone:{
        fontSize: 20,
        color: "#FFFFFF",
        fontWeight: "400",
        padding: 10,
        marginLeft: "50px",
    },
    WeatherItemContainer:{
        width: "200px",
        height: "140px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: "10px",
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