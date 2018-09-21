import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Cuadrado from "./Cuadrado";

export default class EjemploFlex extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          { flexDirection: "row" },
          { alignItems: "center" },
          { justifyContent: "center" }
        ]}
      >
        <Cuadrado style={styles.uno} />
        <Cuadrado style={[styles.dos, { alignSelf: "flex-end" }]} />
        <Cuadrado style={styles.tres} />
        <Cuadrado style={styles.cuatro} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
    backgroundColor: "#ddd"
  },

  uno: {
    backgroundColor: "red"
  },

  dos: {
    backgroundColor: "blue"
  },

  tres: {
    backgroundColor: "green"
  },

  cuatro: {
    backgroundColor: "pink"
  }
});
