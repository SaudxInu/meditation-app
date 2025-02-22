import { Stack } from "expo-router";

export default function AffirmationsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="[itemId]"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
