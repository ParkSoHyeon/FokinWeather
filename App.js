/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import axios from 'axios';
import Geolocation from 'react-native-geolocation-service';

const API_KEY = 'ea3fda10afa8f0e3f7e502a57dd83a75';

export default class extends React.Component {
    state = {
        isLoading: true,
    };
    getWeather = async (latitude, longitude) => {
        const {
            data: {
                main: { temp },
                weather
            }
        } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );

        this.setState({
            isLoading: false,
            temp,
            condition: weather[0].main
        });
    };
    getLocation = async () => {
        try {
            await Geolocation.requestAuthorization('always');
            await Geolocation.getCurrentPosition(
                (position) => {
                    const {coords: {longitude, latitude}} = position;
                    console.log(`longitude: ${longitude}`);
                    console.log(`latitude: ${latitude}`);
                    this.getWeather(latitude, longitude);

                },
                (error) => {
                    console.error(error);
                },
                {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
            );
        } catch (e) {
            console.log(e);
            Alert.alert('Can\'t find you', 'So sad');
        }
    };

    componentDidMount(): * {
        this.getLocation();
    }

    render(): React$Node {
        const { isLoading, temp, condition } = this.state;
        return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} />;
    }
}
