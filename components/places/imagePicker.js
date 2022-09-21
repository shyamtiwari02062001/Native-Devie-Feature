// Import React
import React, {useState} from 'react';
// Import required components
import {
  StyleSheet,
  View,
  Image,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {Colors} from '../../constant/colors';
import OutlinedButton from '../ui/outlinedButton';
const ImagePicker = () => {
  const [filePath, setFilePath] = useState();

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'ImagePicker needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        return false;
      }
    } else {
      return true;
    }
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'ImagePicker needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        Alert.alert('Write permission err', err);
      }
      return false;
    } else {
      return true;
    }
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 0.5,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          Alert.alert('User cancelled camera picker');
          return;
        } else if (response.errorCode === 'camera_unavailable') {
          Alert.alert('Camera not available on device');
          return;
        } else if (response.errorCode === 'permission') {
          Alert.alert('Permission not satisfied');
          return;
        } else if (response.errorCode === 'others') {
          Alert.alert(response.errorMessage);
          return;
        }
        setFilePath(response.assets[0].uri);
      });
    }
  };
  return (
    <View style={styles.container}>
      {filePath && <Image source={{uri: filePath}} style={styles.imageStyle} />}
      <OutlinedButton
        icon={require('../../assets/camera.png')}
        onPress={() => captureImage('photo')}>
        Take Image
      </OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 200,
    margin: 5,
  },
  buttonStyle: {
    padding: 8,
    margin: 10,
  },
  textStyle: {
    color: Colors.primary500,
    fontSize: 20,
  },
});
