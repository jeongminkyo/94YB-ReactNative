import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
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
            // tabBarIcon: ({ focused, color, size }) => {
            //   let iconName;

            //   if (route.name === 'Home') {
            //     iconName = focused
            //       ? 'ion-ios-home'
            //       : 'ion-ios-home-outline';
            //   } else if (route.name === 'Notice') {
            //     iconName = focused ? 'ios-list-box' : 'ios-list';
            //   } else if (route.name === 'Cash') {
            //     iconName = focused ? 'ios-list-box' : 'ios-list';
            //   } else if (route.name === 'Travel') {
            //     iconName = focused ? 'ios-list-box' : 'ios-list';
            //   } else if (route.name === 'Calender') {
            //     iconName = focused ? 'ios-list-box' : 'ios-list';
            //   }
                

            //   // You can return any component that you like here!
            //   return <Ionicons name={iconName} size={size} color={color} />;
            // },
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