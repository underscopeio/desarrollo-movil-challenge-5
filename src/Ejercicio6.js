import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Cuadrado from './Cuadrado'

export default class Ejercicio6 extends Component {
  render() {
    const {style} = this.props;
    return (
      <View style={styles.container}>
        <Cuadrado style={styles.uno} />
        <Cuadrado style={styles.dos} grande={true} />
        <Cuadrado style={styles.tres} grande={true} />
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
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
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
