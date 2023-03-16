import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function Comisc({ listComics }) {
  console.log(listComics[0].resourceURI);
  return (
    <SafeAreaView style={styles.container}>
      {listComics.map((comic) => (
        <ScrollView>
          <Text style={styles.title}>{comic.name}</Text>
          <Image source={comic.resourceURI + ".jpg"} />
        </ScrollView>
      ))}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    margin: 10,
    fontSize: 25,
  },
  scrollView: {},
  img: {},
});
