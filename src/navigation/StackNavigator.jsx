import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TrendingScreen from '../screens/TrendingScreen';
import IdeasScreen from '../screens/IdeasScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Trending" component={TrendingScreen} />
      <Stack.Screen name="Ideas" component={IdeasScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
