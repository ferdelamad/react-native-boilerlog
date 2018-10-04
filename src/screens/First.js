import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "../common/Button";
import { Image } from "react-native-animatable";

import logo from "../assets/logo-test.png";
import metrics from "../assets/config";
const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.5;

export default class First extends React.Component {
  constructor(props) {
    super(props);
  }
  handleTextRef = ref => (this.text = ref);
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image
          animation={"bounceIn"}
          duration={1500}
          delay={200}
          ref={ref => (this.logoImgRef = ref)}
          style={styles.logoImg}
          source={logo}
        />
        <Button onPress={() => navigation.navigate("Second")}>
          Go to screen ONE
        </Button>
        <Text style={{ flex: 1 }}>Test text</Text>
        {/* <Text style={styles.welcome}>Screen 1</Text> */}
        {/* <Text style={styles.welcome}>Screen 1</Text> */}
        <Text style={{ flex: 1 }}>Test text</Text>
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
    paddingTop: 20
  },
  logoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: "center",
    resizeMode: "contain"
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    margin: 1,
    color: "red"
  }
});
