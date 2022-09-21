import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';

const IconButton = ({icon, color, size, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      <Image
        source={icon}
        style={{tintColor: color, height: size, width: size}}
      />
    </Pressable>
  );
};
export default IconButton;
const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
