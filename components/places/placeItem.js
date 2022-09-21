import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
const PlaceItem = ({place, onSelect}) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{uri: place.imgeUri}} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};
export default PlaceItem;
const styles = StyleSheet.create({});
