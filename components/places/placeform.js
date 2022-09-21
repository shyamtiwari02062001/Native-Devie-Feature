import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../../constant/colors';
import ImagePicker from './imagePicker';
const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const onChangeHandler = value => {
    setEnteredTitle(value);
  };
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeHandler}
          value={enteredTitle}
        />
        <ImagePicker />
      </View>
    </ScrollView>
  );
};
export default PlaceForm;
const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    color: '#000',
    backgroundColor: Colors.primary100,
  },
});
