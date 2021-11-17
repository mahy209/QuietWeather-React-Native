import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';

import * as location from 'expo-location';
import AppLoading from 'expo-app-loading';
import { useFonts, Scada_400Regular } from '@expo-google-fonts/scada';

import DateTime from './components/DateTime';
import WeatherScroll from './components/WeatherScroll';

const API_KEY = '1ea87fd965b57956c429979417f99052';

const img = require ('./assets/4.jpg')
export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("40.7128", "-74.0060")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

      // console.log(data)
      setData(data)
      })
    }
    
  }

  let [fontsLoaded] = useFonts({
    Scada_400Regular,
  });
  return (
    <View style={styles.container}>
    <ImageBackground source={img} style={styles.image}>
    <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
    <WeatherScroll weatherData={data.daily}/>
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
