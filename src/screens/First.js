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
        <View style={{ flexGrow: 1 }}>
          <Image
            animation={"bounceIn"}
            duration={1500}
            delay={200}
            ref={ref => (this.logoImgRef = ref)}
            style={styles.logoImg}
            source={logo}
          />
        </View>
        <Button onPress={() => navigation.navigate("Test")}>Log In</Button>
        <Text style={styles.welcome}>Welcome Screen</Text>
        <Text style={styles.welcome}>Welcome Screen</Text>
        {/* <Button onPress={() => navigation.navigate("Second")}>Sign up!</Button> */}
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
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: "center",
    resizeMode: "contain"
  },
  welcome: {
    fontSize: 20,
    color: "red"
  }
});
