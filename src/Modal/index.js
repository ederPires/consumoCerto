import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Detalhes({ dados, fecharModal }) {
  return (
    <View style={styles.container}>
      <View  style={styles.modalContainer}>

        <TouchableOpacity style={styles.btnVoltar} onPress={fecharModal} >
          <Text style={{color: '#FFF', fontSize: 16}}>Calcular novamente</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{dados.resultado}</Text>
        <Text style={styles.sinopse}>Com os preços: </Text>
        <Text style={styles.descricao}>Álcool: {dados.alcool}</Text>
        <Text style={styles.descricao}>Gasolina: {dados.gasolina}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    //marginLeft: 10,
    //marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#121212',
    //borderTopLeftRadius:5,
    //borderTopRightRadius:5,
  },
  btnVoltar:{
    backgroundColor: '#E52246',
    padding: 15,
    borderRadius: 5,
    //Coloca botão em baixo
    position: 'absolute',
    bottom: 1,
    width: '100%', // ajuste a largura
    height: 50, // ajuste da altura
    alignItems: 'center' //alinha texto ao centro
  },
  titulo: {
    textAlign: 'center',
    color: '#FFF',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold'
  },
  sinopse: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 18,
    marginLeft: 10
  },
  descricao: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
})
