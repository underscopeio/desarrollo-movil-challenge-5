import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ejercicio8 from './src/Ejercicio8'

export default class App extends React.Component {
  render() {
    return <Ejercicio8 />
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
