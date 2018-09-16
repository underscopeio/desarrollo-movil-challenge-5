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
          { flexWrap: "wrap" },
          { justifyContent: "center" },
          { alignItems: "center" }
        ]}
      >
        <Cuadrado style={styles.uno} grande={true} />
        <Cuadrado
          style={[styles.dos, { alignSelf: "flex-end" }]}
          grande={true}
        />
        <Cuadrado style={styles.tres} grande={true} />
        <Cuadrado style={styles.cuatro} grande={true} />
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
