import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EjemploFlex from './src/EjemploFlex08'

export default class App extends React.Component {
  render() {
    return <EjemploFlex />
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
