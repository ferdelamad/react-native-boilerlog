import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./src/common/Button";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>react-native-boilerlog</Text>
        <Button text={"Click me"} onPress={() => console.log("click")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
