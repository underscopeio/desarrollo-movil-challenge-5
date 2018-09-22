import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ejercicio2 from './src/Ejercicio2'

export default class App extends React.Component {
  render() {
    return <Ejercicio2 />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
