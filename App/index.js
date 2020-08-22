import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import BottomTabNavigator from './navigators/BottomTabNavigator';

const App = () => {
  // do stuff while splash screen is shown
  // After having done stuff (such as async tasks) hide the splash screen
  setTimeout(() => SplashScreen.hide(), 5000);

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
