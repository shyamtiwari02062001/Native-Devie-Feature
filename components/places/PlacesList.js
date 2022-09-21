import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../constant/colors';
import PlaceItem from './placeItem';
const PlacesList = ({places}) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>
          No places added yet - start addding some !
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={({item}) => <PlaceItem place={item} />}
    />
  );
};
export default PlacesList;
const styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallBackText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary200,
  },
});
