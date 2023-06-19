import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PreLoginScreen from './src/PreLoginScreen';
import LoginScreen from './src/LoginScreen';
import GuestScreen from './src/GuestScreen';
import ParkInfoScreen from './src/ParkInfoScreen';
import ContactScreen from './src/ContactScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="PreLogin" component={PreLoginScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="GuestScreen" component={GuestScreen} />
        <Tab.Screen name="ParkInfo" component={ParkInfoScreen} />
        <Tab.Screen name="ContactScreen" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
