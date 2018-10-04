import React from "react";
import { Text, StyleSheet } from "react-native";
import { Button } from "../common/Button";
import { Image, View } from "react-native-animatable";

import logo from "../assets/logo-test.png";
import metrics from "../assets/config";
const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8;

export default class First extends React.Component {
  handleTextRef = ref => (this.text = ref);
  render() {
    return (
      <View style={styles.container}>
        <Image
          animation={"bounceIn"}
          duration={1200}
          delay={200}
          ref={ref => (this.logoImgRef = ref)}
          style={styles.logoImg}
          source={logo}
        />
        <Text style={styles.welcome}>Screen 1</Text>
        <Button onPress={() => navigation.navigate("Second")}>
          Go to screen ONE
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: metrics.DEVICE_WIDTH,
    height: metrics.DEVICE_HEIGHT,
    paddingTop: 24
  },
  logoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: "center",
    resizeMode: "contain",
    marginVertical: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "red"
  }
});
