import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ejercicio5 from './src/Ejercicio5'

export default class App extends React.Component {
  render() {
    return <Ejercicio5 />
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
