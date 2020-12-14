import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar
} from 'react-native';
import PropTypes from 'prop-types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        bgColor: "#4286f4",
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-hail",
        bgColor: "#FEF253",
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "weather-rainy",
        bgColor: "#005BEA",
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        bgColor: "#B9B6E5",
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        iconName: "weather-hail",
        bgColor: "#89F7FE"
    },
    Clear: {
        iconName: "weather-sunny",
        bgColor: "#FF7300",
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        bgColor: "#304352",
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
};

export default function Weather({ temp, condition }) {
    return (
      <View style={[styles.container, { backgroundColor: weatherOptions[condition].bgColor }]}>
          <StatusBar barStyle="light-content" />
          <View style={styles.halfContainer}>
              <MaterialCommunityIcons
                  size={96}
                  name={weatherOptions[condition].iconName}
                  color="white" />
              <Text style={styles.temp}>{temp}°</Text>
          </View>
          <View style={{...styles.halfContainer, ...styles.textContainer}}>
              <Text style={styles.title}>{weatherOptions[condition].title}</Text>
              <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
          </View>
      </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
    },
    textContainer: {
        paddingVertical: 20,
        alignItems: 'flex-start'
    }
})


