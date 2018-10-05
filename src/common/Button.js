import React from "react";
import {
  Text,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback
} from "react-native";

import { View } from "react-native-animatable";

export const Button = ({ onPress, children }) => {
  const { button, text } = styles;
  //IOS Button
  if (Platform.OS === "ios") {
    return (
      <View
        ref={ref => (this.buttonRef = ref)}
        animation={"bounceIn"}
        duration={600}
        delay={400}
      >
        <TouchableHighlight
          onPress={onPress}
          style={button}
          underlayColor={"rgba(255,90,96,0.6)"}
        >
          <Text style={text}>{children}</Text>
        </TouchableHighlight>
      </View>
    );
  }
  //Android Button
  return (
    <View style={{ flex: 1 }}>
      <TouchableNativeFeedback
        style={button}
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple("rgba(255,90,96,0.6)")}
      >
        <Text style={text}>{children}</Text>
      </TouchableNativeFeedback>
    </View>
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
