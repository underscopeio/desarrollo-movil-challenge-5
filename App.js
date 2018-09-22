import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ejercicio1 from './src/Ejercicio1'

export default class App extends React.Component {
  render() {
    return <Ejercicio1 />
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
