import React, { useContext } from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigators/BottomTabNavigator';
import LoginNavigator from './navigators/LoginNavigator';

import Loading from './components/Loading';
import { UserContext, UserContextProvider } from './Context/User'

const App = () => {
  const {isLoading, userInfo} = useContext(UserContext);

  // if (isLoading === false) {
  //   return <Loading />;
  // }
  
  return (
    <UserContextProvider>
      <NavigationContainer>
        {userInfo ? <BottomTabNavigator /> : <LoginNavigator />}
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;
