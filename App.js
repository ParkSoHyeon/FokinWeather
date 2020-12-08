/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import Geolocation from 'react-native-geolocation-service';

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getLocation = async () => {
    try {
      await Geolocation.requestAuthorization('always');
      await Geolocation.getCurrentPosition(
          (position) => {
            const { coords: { longitude, latitude } } = position;
            console.log(`longitude: ${longitude}`);
            console.log(`latitude: ${latitude}`);
            this.setState({isLoading: false});
          },
          (error) => {
            console.error(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
    catch (e) {
      console.log(e);
      Alert.alert('Can\'t find you', 'So sad')
    }
  }
  componentDidMount(): * {
    this.getLocation();
  }

  render(): React$Node {
    const { isLoading } = this.state;
    return isLoading ? <Loading/> : null;
  }
}
