import React from "react";
import {
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Text,
  Platform,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#ce181e",
    borderRadius: 15,
    borderColor: "#FFF",
    borderWidth: 1.5,
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

export const Button = ({ text, onPress }) => {
  //IOS Button
  if (Platform.OS === "ios") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableHighlight
          onPress={onPress}
          style={styles.button}
          underlayColor={"rgba(255,90,96,0.6)"}
        >
          <Text style={styles.text}>{text}</Text>
        </TouchableHighlight>
      </View>
    );
  }
  //Android Button
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple("rgba(255,90,96,0.6)")}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};
