import React, { Component } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet
} from "react-native";

import { View } from "react-native-animatable";

// import { onSignIn } from "../auth";
// import { styles } from "../styles/SignInStyle";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      error: "",
      success: "",
      loading: false
    };
  }

  render() {
    const {
      container,
      logoContainer,
      logo,
      title,
      formContainer,
      input,
      btnLog,
      login
    } = styles;

    const img = require("../assets/logo-test.png");

    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={64}
        style={container}
      >
        <StatusBar barStyle="light-content" />
        <View style={logoContainer}>
          <Image style={logo} source={img} />
          <Text style={title}>Creating events in a much cooler way.</Text>
        </View>
        <View style={formContainer}>
          <View
            animation={"bounceIn"}
            duration={1500}
            delay={200}
            ref={ref => (this.textInput01 = ref)}
          >
            <TextInput
              placeholder="John@email.com"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={this.state.userName}
              onChangeText={userName =>
                this.setState({
                  userName
                })
              }
              style={input}
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View
            animation={"bounceIn"}
            duration={1500}
            delay={300}
            ref={ref => (this.textInput02 = ref)}
          >
            <TextInput
              placeholder="password"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              secureTextEntry
              value={this.state.password}
              onChangeText={password =>
                this.setState({
                  password
                })
              }
              style={input}
              returnKeyType="go"
            />
          </View>

          <View
            animation={"bounceIn"}
            duration={1500}
            delay={400}
            ref={ref => (this.btnLog = ref)}
          >
            <TouchableOpacity
              onPress={() => {
                console.log("You pressed me");
                // onSignIn().then(() => navigation.navigate("Screen2"));
              }}
              style={btnLog}
            >
              <Text style={login}>LOG IN</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ color: "white" }}>{this.state.error}</Text>
          <Text style={{ color: "blue" }}>{this.state.success}</Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B76EB8"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: "#fff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.9
  },
  formContainer: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 15,
    color: "#FFF",
    paddingHorizontal: 10
  },
  btnLog: {
    backgroundColor: "#7ABA7A",
    paddingVertical: 15,
    borderRadius: 15
  },
  login: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700"
  },
  tabs: {
    flex: 1,
    textAlign: "center",
    flexDirection: "row"
  }
});
