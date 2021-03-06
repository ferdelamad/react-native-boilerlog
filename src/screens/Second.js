import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../common/Button";

export const Second = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Screen 2</Text>
      <Button onPress={() => navigation.navigate("First")}>
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
    color: "green"
  }
});
