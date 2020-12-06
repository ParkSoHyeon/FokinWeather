/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
      <View style={styles.container}>
        <View style={styles.yellowView} />
        <View style={styles.blueView} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellowView: {
    backgroundColor: 'yellow',
    flex: 1
  },
  blueView: {
    backgroundColor: 'blue',
    flex: 3
  }
});

export default App;
