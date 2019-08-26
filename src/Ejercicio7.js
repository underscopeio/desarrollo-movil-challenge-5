import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Cuadrado from './Cuadrado'

export default class Ejercicio7 extends Component {
  render() {
    const {style} = this.props;
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
    flex: 1,
    marginVertical: 40,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  uno: {
    backgroundColor: 'red',
  },

  dos: {
    backgroundColor: 'blue',
    flex: 1
  },

  tres: {
    backgroundColor: 'green',
  },

  cuatro: {
    backgroundColor: 'pink',
  },
})
