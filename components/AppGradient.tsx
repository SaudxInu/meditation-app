import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

const AppGradient = ({
  children,
  colors,
}: {
  children: any;
  colors: string[];
}) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <SafeAreaView className="flex-1 px-20 py-12">{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
