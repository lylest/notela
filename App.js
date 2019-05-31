import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './navigation/TabNavigator';
import HomeScreen from './screen/HomeScreen';
import Saved from './screen/Saved';

export default class App extends React.Component {
  render() {
    return (
     
        <TabNavigator />
   
    );
  }
}


