import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Cuadrado from './Cuadrado'

export default class EjemploFlex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cuadrado  style={styles.uno} />
        <Cuadrado grande style={styles.dos} />
        <Cuadrado grande style={styles.tres} />
        <Cuadrado style={styles.cuatro} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
    backgroundColor: '#ddd',
    flexDirection : 'row',
    justifyContent:'space-evenly',
    alignItems:'center',

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
  }
})