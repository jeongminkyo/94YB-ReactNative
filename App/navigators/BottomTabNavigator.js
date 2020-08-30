import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from '../components/Icon';
import HomeScreen from '../screens/HomeScreen';
import NoticeScreen from '../screens/NoticeScreen';
import CashScreen from '../screens/CashScreen';
import TravelScreen from '../screens/TravelScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iosName = 'ios-checkmark';
              let aosName = 'md-checkmark';

              if (route.name === 'Home') {
                iosName = focused ? 'ios-home' : 'ios-home-outline';
                aosName = focused ? 'md-home' : 'md-home-outline';
              } else if (route.name === 'Notice') {
                iosName = focused ? 'ios-clipboard' : 'ios-clipboard-outline';
                aosName = focused ? 'md-clipboard' : 'md-clipboard-outline';
              } else if (route.name === 'Cash') {
                iosName = focused ? 'ios-wallet' : 'ios-wallet-outline';
                aosName = focused ? 'md-wallet' : 'md-wallet-outline';
              } else if (route.name === 'Travel') {
                iosName = focused ? 'ios-airplane' : 'ios-airplane-outline';
                aosName = focused ? 'md-airplane' : 'md-airplane-outline';
              } else if (route.name === 'MyAccount') {
                iosName = focused ? 'ios-person' : 'ios-person-outline';
                aosName = focused ? 'md-person' : 'md-person-outline';
              }


              // You can return any component that you like here!
              return <Icon
                        iosName={iosName}
                        aosName={aosName}
                        size={size}
                        color={color} />;
            },
            })}
            tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Notice" component={NoticeScreen} />
            <Tab.Screen name="Cash" component={CashScreen} />
            <Tab.Screen name="Travel" component={TravelScreen} />
            <Tab.Screen name="MyAccount" component={MyAccountScreen} />
        </Tab.Navigator>
    );
  };

  export default BottomTabNavigator;
