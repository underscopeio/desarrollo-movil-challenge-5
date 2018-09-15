import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EjemploFlex from './src/EjemploFlex'
import FilaIndia from './src/Ejercicio1'
import HaciendoLaVertical from './src/Ejercicio2'
import CentradoPerfecto from './src/Ejercicio3'
import ElDistinto from './src/Ejercicio4'
import TodosNoEntran from './src/Ejercicio5'
import Simetria from './src/Ejercicio6'

export default class App extends React.Component {
  render() {
    return <Simetria />
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
