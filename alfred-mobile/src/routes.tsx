import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Home } from './screens/Home';
import { Favorite } from './screens/Favorites';
import { Colors } from './styles/colors'
import { NavigationContainer } from '@react-navigation/native';

export function Routes() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: Colors.dark,
          },
        }}
      >
        <Tab.Screen
          name="PACIENTES"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: Colors.dark,
            },
            headerTitleStyle: {
              color: 'white',
            },
            tabBarLabel: 'Pacientes',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="FAVORITOS"
          component={Favorite}
          options={{
            headerStyle: {
              backgroundColor: Colors.dark,
            },
            headerTitleStyle: {
              color: 'white',
            },
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ color }) => (
              <Ionicons name="heart-outline" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
