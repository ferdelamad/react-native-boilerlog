import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../common/Button";

export const First = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Screen 1</Text>
      <Button onPress={() => navigation.navigate("Second")}>
        Go to screen 2
      </Button>
    </View>
  );
};

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
    margin: 10,
    color: "red"
  }
});
