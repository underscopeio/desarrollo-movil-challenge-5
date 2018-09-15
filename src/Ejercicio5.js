import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Cuadrado from './Cuadrado'

export default class TodosNoEntran extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cuadrado style={styles.uno} grande />
        <Cuadrado style={styles.dos} grande />
        <Cuadrado style={styles.tres} grande />
        <Cuadrado style={styles.cuatro} grande />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
