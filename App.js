import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import About from "./src/screens/about";   work with Stack.Screens
//import Counter from "./src/screens/counter";  work with Stack.Screens
import { screens } from "./src/screens"; // work with screens.map
//import { Counter2 } from "./src/screens/counter2";  work with Stack.Screens
import { OS, os } from "./src/screens/os"; //work with Stack.Screens

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map((s) => (
          <Stack.Screen
            key={s.name}
            name={s.name}
            component={s.component}
          ></Stack.Screen>
        ))}
        {/*<Stack.Screen name="Counter2" component={Counter2}></Stack.Screen>*/}
        <Stack.Screen name="OS" component={OS}></Stack.Screen>
        {/*
        <Stack.Screen name="About" component={About}></Stack.Screen>
        <Stack.Screen name="Counter" component={Counter}></Stack.Screen>
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
