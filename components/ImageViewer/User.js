
import { StyleSheet, Text, View } from 'react-native'; 
import React from "react";
import Secret from './Secret';
export default function User({ props }) {
  const isAdmin = props.isAdmin;  
    return (
      <View>
        <Text style={styles.color}>welcome{props.firstname}{props.lastname}</Text>
          {/* {props.isAdmin} */}
          {isAdmin ? <Secret /> : <Text style={styles.color}>GUEST</Text>}
      </View>
       )
    }
const styles = StyleSheet.create({
  color: {
    color: '#25292e'
  }  
});