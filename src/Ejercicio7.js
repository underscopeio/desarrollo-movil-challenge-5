import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Cuadrado from "./Cuadrado";

export default class Ejercicio7 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cuadrado style={styles.uno} />
        <Cuadrado style={styles.dos} />
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
    backgroundColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },

  uno: {
    backgroundColor: "red"
  },

  dos: {
    backgroundColor: "blue",
    flex: 4
  },

  tres: {
    backgroundColor: "green"
  },

  cuatro: {
    backgroundColor: "pink"
  }
});
