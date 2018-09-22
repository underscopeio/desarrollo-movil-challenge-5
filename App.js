import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ejercicio4 from './src/Ejercicio4'

export default class App extends React.Component {
  render() {
    return <Ejercicio4 />
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
