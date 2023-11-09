import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "./Welcome"; 
import Timer from "./TimerScreen";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { display: 'flex', backgroundColor: "#176B87" },
      }}
    >
      <Tab.Screen
        name="  "
        component={Welcome}
        options={{
          tabBarLabel: "Alarm",
          tabBarIcon: ({ color, size }) => (
            <Icon name="alarm" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name=" "
        component={Timer}
        options={{
          tabBarLabel: "Timer",
          tabBarIcon: ({ color, size }) => (
            <Icon name="timer" color={color} size={size} />
          ),
        }}
      />
  
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
