import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddPlace from './screens/AddPlace';
import AllPlace from './screens/AllPlaces';
import IconButton from './components/ui/iconButton.js';
import {Colors} from './constant/colors';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700},
          }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlace}
            options={({navigation}) => ({
              title: 'Your favorite places',
              headerRight: ({tintColor}) => (
                <IconButton
                  color={tintColor}
                  size={24}
                  icon={require('./assets/plus.png')}
                  onPress={() => navigation.navigate('AddPlaces')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlaces"
            component={AddPlace}
            options={{title: 'Add your place'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
