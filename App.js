import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Scada_400Regular } from '@expo-google-fonts/scada';

import DateTime from './components/DateTime';
import WeatherScroll from './components/WeatherScroll';

const img = require ('./assets/4.jpg')
export default function App() {
  let [fontsLoaded] = useFonts({
    Scada_400Regular,
  });
  return (
    <View style={styles.container}>
    <ImageBackground source={img} style={styles.image}>
    <DateTime/>
    <WeatherScroll/>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Scada_400Regular',
  },
  image: {
    flex:1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
