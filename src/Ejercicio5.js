import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Cuadrado from './Cuadrado'

export default class EjemploFlex extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Cuadrado style={styles.uno} grande/>
        <Cuadrado style={styles.dos} grande/>
        <Cuadrado style={styles.tres} grande />
        <Cuadrado style={styles.cuatro} grande />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    flexWrap:'wrap',
    marginVertical: 40,
    backgroundColor: '#ddd',
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
