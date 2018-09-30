import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./src/common/Button";
import { Routes } from "./src/Routes";

export default class App extends Component {
  render() {
    return (
      <Routes />
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>react-native-boilerlog</Text> */}
      //   <Button onPress={() => console.log("click")}>Click me!!</Button>
      // </View>
    );
  }
}
