import React, {useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';


export default function TabTwoScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
 
    
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  
  return (<>

      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: latitude ? latitude : 34.05593950770242,
            longitude: longitude ? longitude : -84.48645332836033,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}>
            <Marker 
              coordinate={{
                latitude: latitude ? latitude : 34.05593950770242,
                longitude: longitude ? longitude : -84.48645332836033,
                }} 
              title='Location Markers'
              description='This is my location'
              image={require('@/assets/images/200x200.png')}
            />
        </MapView>
    </View>
      
    
    </> );
}

const styles = StyleSheet.create({



  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
