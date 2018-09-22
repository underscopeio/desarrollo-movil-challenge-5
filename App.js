import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ejercicio7 from './src/Ejercicio7'

export default class App extends React.Component {
  render() {
    return <Ejercicio7 />
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
