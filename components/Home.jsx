import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";

import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";

import CharacterCard from "./CharacterCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "http://gateway.marvel.com/v1/public/characters?ts=martin&apikey=c196baefce684067e1d3d532d02b59d2&hash=5fac97994a159f64c87251906fd8a7fc"
    )
      .then((res) => res.json())
      .then((data) => setData(data.data.results))
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, []);

  function searchCharacter() {
    if (search) {
      setIsLoading(true);
      fetch(
        `http://gateway.marvel.com/v1/public/characters?name=${search}&ts=martin&apikey=c196baefce684067e1d3d532d02b59d2&hash=5fac97994a159f64c87251906fd8a7fc`
      )
      .then(respononse => respononse.json())
        .then(data => setData(data.data.results))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View  >
          <Searchbar
            style={styles.search}
            placeholder="Search for character..."
            onChangeText={(value) => setSearch(value)}
            value={search}
            onIconPress={searchCharacter}
            onSubmitEditing={searchCharacter}
          />
          <FlatList
          style={styles.flatList}
            data={data}
            renderItem={({ item }) => (
              <CharacterCard
                id={item.id}
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                name={item.name}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
        alignItems: "center",
        justifyContent: 'flex-start',
  },
  search: {
    margin: 20,
    backgroundColor:'grey',
  },
  flatList: {
  },
});
