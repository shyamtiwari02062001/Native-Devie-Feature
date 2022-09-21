import React from 'react';
import {Pressable, Image, Text, StyleSheet} from 'react-native';
import {Colors} from '../../constant/colors';

const OutlinedButton = ({onPress, size, icon, children}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};
export default OutlinedButton;
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary500,
    flexDirection: 'row',
    flex: 1,
    width: '100%',
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 20,
    width: 18,
    height: 18,
    tintColor: Colors.primary500,
  },
  text: {
    color: Colors.primary500,
  },
});
