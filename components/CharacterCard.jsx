import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from "react-native";
import Detail from "./Detail";

export default function CharacterCard({id, image, name}) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('Detail', { id: id})}
    >
      <Image source={image} />
      <Text >{name}</Text>
    </TouchableOpacity>
  );
}
