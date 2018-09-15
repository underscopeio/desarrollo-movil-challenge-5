import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// import EjemploFlex from './src/Ejercicio1'
// import EjemploFlex from './src/Ejercicio2'
// import EjemploFlex from './src/Ejercicio3'
//import EjemploFlex from './src/Ejercicio4'
//import EjemploFlex from './src/Ejercicio5'
//import EjemploFlex from './src/Ejercicio6'
//import EjemploFlex from './src/Ejercicio7'
import EjemploFlex from './src/Ejercicio8'

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
