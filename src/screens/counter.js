import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {count}</Text>
      <Button
        style={styles.button}
        title="+"
        onPress={() => setCount(count + 1)}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexFlow: "row",
    alignSelf: "center",
    backgroundColor: "#F0F8FF",
    padding: "16px",
  },
  text: {
    alignSelf: "center",
    paddingRight: "20px",
  },
});
