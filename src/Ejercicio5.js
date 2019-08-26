import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Cuadrado from './Cuadrado'

export default class Ejercicio5 extends Component {
  render() {
    const {style} = this.props;
    return (
      <View style={styles.container}>
        <Cuadrado style={styles.uno} grande={true} />
        <Cuadrado style={styles.dos} grande={true} />
        <Cuadrado style={styles.tres} grande={true} />
        <Cuadrado style={styles.cuatro} grande={true} />
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
    flexWrap: 'wrap'
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
