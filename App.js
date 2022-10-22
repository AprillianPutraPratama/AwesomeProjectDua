import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './navigasi/About';
import Home from './navigasi/Home';
import Aprillian from './navigasi/Aprillian';
import Putra from './navigasi/Putra';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "About" component={About}/>
        <Stack.Screen name = "Aprillian" component={Aprillian}/>
        <Stack.Screen name = "Putra" component={Putra}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;