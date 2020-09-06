import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UserContext } from 'context/User';

import Loading from 'components/Loading';
import BottomTabNavigator from './BottomTabNavigator';
import LoginNavigator from './LoginNavigator';


export default () => {
  const { isLoading, userInfo } = useContext(UserContext);

  if (isLoading === false) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {userInfo ? <BottomTabNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};