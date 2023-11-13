import React from "react";

import { StyleSheet, Text, View,  AppRegistry } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';


export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <Text> Home</Text>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'pink',
  },
  textBlue: {
    color: 'blue',
    color: 'red',
  },
  textRed: {
   
    color: 'red',
  }
});
