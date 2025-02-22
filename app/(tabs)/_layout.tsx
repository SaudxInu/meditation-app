import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="flower-tulip"
                size={24}
                color={color}
              />
            );
          },
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Affirmations",
          tabBarIcon: ({ color }) => {
            return <Entypo name="open-book" size={24} color={color} />;
          },
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
