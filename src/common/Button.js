import React from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback
} from "react-native";

export const Button = ({ onPress, children }) => {
  const { button, text } = styles;
  //IOS Button
  if (Platform.OS === "ios") {
    return (
      <TouchableHighlight
        onPress={onPress}
        style={button}
        underlayColor={"rgba(255,90,96,0.6)"}
      >
        <Text style={text}>{children}</Text>
      </TouchableHighlight>
    );
  }
  //Android Button
  return (
    <TouchableNativeFeedback
      style={button}
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple("rgba(255,90,96,0.6)")}
    >
      <Text style={text}>{children}</Text>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    //Optional border for the button
    // borderColor: "#FFF",
    // borderWidth: 1.25,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#ce181e",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#FFF",
    fontSize: 14,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10
  }
});
