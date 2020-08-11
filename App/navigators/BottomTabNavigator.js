import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

import Icon from '../components/Icon';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iosName;
              let aosName;

              if (route.name === 'Home') {
                iosName = focused ? 'ios-checkmark' : 'ios-checkmark';
                aosName = focused ? 'md-checkmark' : 'md-checkmark';
              } else if (route.name === 'Notice') {
                iosName = focused ? 'ios-checkmark' : 'ios-checkmark';
                aosName = focused ? 'md-checkmark' : 'md-checkmark';
              } else if (route.name === 'Cash') {
                iosName = focused ? 'ios-checkmark' : 'ios-checkmark';
                aosName = focused ? 'md-checkmark' : 'md-checkmark';
              } else if (route.name === 'Travel') {
                iosName = focused ? 'ios-checkmark' : 'ios-checkmark';
                aosName = focused ? 'md-checkmark' : 'md-checkmark';
              } else if (route.name === 'Calender') {
                iosName = focused ? 'ios-checkmark' : 'ios-checkmark';
                aosName = focused ? 'md-checkmark' : 'md-checkmark';
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
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Notice" component={SettingsScreen} />
            <Tab.Screen name="Cash" component={SettingsScreen} />
            <Tab.Screen name="Travel" component={SettingsScreen} />
            <Tab.Screen name="Calender" component={SettingsScreen} />
        </Tab.Navigator>
    );
  };
  
  export default BottomTabNavigator;