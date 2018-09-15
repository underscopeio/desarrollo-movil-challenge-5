import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Cuadrado from "./Cuadrado";

export default class Ejercicio5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cuadrado style={styles.uno} grande />
        <Cuadrado style={styles.dos} grande />
        <Cuadrado style={styles.tres} grande />
        <Cuadrado style={styles.cuatro} grande />
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
    flexWrap: "wrap"
    /*alignItems: "center",
    justifyContent: "center"*/
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
