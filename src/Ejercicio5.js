import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Cuadrado from './Cuadrado'

export default class Ejercicio5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cuadrado grande style={styles.uno} />
        <Cuadrado grande style={styles.dos} />
        <Cuadrado grande style={styles.tres} />
        <Cuadrado grande style={styles.cuatro} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    marginVertical: 40,
    backgroundColor: 'black',
  },

  uno: {
    backgroundColor: 'red',
  },

  dos: {
    backgroundColor: 'blue',
  },

  tres: {
    backgroundColor: 'green',
  },

  cuatro: {
    backgroundColor: 'pink',
  },
})
