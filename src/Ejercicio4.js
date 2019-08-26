import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Cuadrado from './Cuadrado'

export default class Ejercicio4 extends Component {
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
    flexDirection: 'row',
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center'
  },

  uno: {
    backgroundColor: 'red',
  },

  dos: {
    backgroundColor: 'blue',
    alignSelf: 'flex-end'
  },

  tres: {
    backgroundColor: 'green',
  },

  cuatro: {
    backgroundColor: 'pink',
  },
})
