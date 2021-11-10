import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native';

const WeatherScroll = () => {
    return(
        <ScrollView>
            <CurrentTemp1/>
        </ScrollView>
    )
}

const CurrentTemp1 = () => {
    const img = require ('/assets/sun.png')
    return(
        <View>
        <Image source={img} style={styles.image}/>
        <View>
        <Text>Sunday</Text>
        <Text>Night- 28&#x2103;</Text>
        <Text>Day- 28&#x2103;</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    }
})

export default WeatherScroll
