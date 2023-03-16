import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";

import Information from "./Information";
import Comics from "./Comics";

const Tab = createBottomTabNavigator();

export default function Detail({ route }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters/${route.params.id}?ts=martin&apikey=c196baefce684067e1d3d532d02b59d2&hash=5fac97994a159f64c87251906fd8a7fc`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data.results[0]))
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Information"
      tabBarOptions={{
        activeTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Information"
        component={() => (
          <Information          
            name={data.name}
            description={data.description}
            image={data?.thumbnail?.path + ".jpg"}
          />
        )}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Comics"
        component={() => <Comics listComics={data?.comics?.items} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {},
  info: {},
  comics: {},
});
