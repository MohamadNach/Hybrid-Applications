import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export class Counter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Counter2: {this.state.count}</Text>
        <Button
          title="+"
          onPress={() => this.setState({ count: this.state.count + 1 })}
        ></Button>
      </View>
    );
  }
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
