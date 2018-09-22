import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Cuadrado from './Cuadrado'

export default class Ejercicio4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cuadrado style={styles.uno} />
        <Cuadrado style={styles.dos} />
        <Cuadrado style={styles.tres} />
        <Cuadrado style={styles.cuatro} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent : 'center',
    alignItems: 'center',
    flex: 1,
    marginVertical: 40,
    backgroundColor: 'black',
  },

  uno: {
    backgroundColor: 'red',
  },

  dos: {
    backgroundColor: 'blue',
    alignSelf: 'flex-end',
  },

  tres: {
    backgroundColor: 'green',
  },

  cuatro: {
    backgroundColor: 'pink',
  },
})
