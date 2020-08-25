import React, { useContext } from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import BottomTabNavigator from './navigators/BottomTabNavigator';
import LoginNavigator from './navigators/LoginNavigator';

import { UserContext, UserContextProvider } from './Context/User'

const App = () => {
  const {isLoading, userInfo} = useContext(UserContext);

  if (isLoading === true) {
    return <Loading />;
  }
  
  return (
    <UserContextProvider>
      <NavigationContainer>
        {userInfo ? <BottomTabNavigator /> : <LoginNavigator />}
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;
