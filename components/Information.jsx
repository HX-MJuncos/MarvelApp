import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Information(props) {
    
  return (
    <View style={styles.container} >
      <Text style={styles.title} >{props.name}</Text>
      <Text style={styles.text} >{props.description && props.description}</Text>
      <Image source={props.image} />
     
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      margin: 10
    },
    title:{
        margin: 10,
    fontSize: 20,
    },
    text: {
        margin: 10,
    },
    img: {},
  });
