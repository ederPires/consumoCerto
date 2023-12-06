import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Detalhes({ dados, fecharModal }) {
  return (
    <View style={styles.container}>
      <View  style={styles.modalContainer}>

        <View style={styles.areaImagem}>
          <View style={styles.imagemContainer}>
            <Image
              source={require('../../src/assets/gas-station.png')}
              style={styles.imagem}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.btnVoltar} onPress={fecharModal} >
          <Text style={styles.btnVoltarTexto}>Calcular novamente</Text>
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
    backgroundColor: '#121212',
    padding: 15,
    borderRadius: 5,
    borderWidth: 2, // Adiciona uma borda de 2 pixels
    borderColor: '#E52246', // Cor da borda vermelha
    marginBottom: 150,
    //Coloca botão em baixo
    position: 'absolute',
    bottom: 1,
    width: '100%', // ajuste a largura
    height: 60, // ajuste da altura
    alignItems: 'center' //alinha texto ao centro
  },
  btnVoltarTexto: {
    color: '#E52246', // Cor do texto vermelha
    fontSize: 16,
  },
  titulo: {
    textAlign: 'center',
    color: '#FFF',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#50B9B5'
  },
  sinopse: {
    alignSelf: 'center',
    fontWeight: 'bold', // Adiciona negrito ao texto
    color: '#FFF',
    fontSize: 20,
    marginBottom: 18,
    marginLeft: 10
  },
  descricao: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  areaImagem: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', // Centraliza horizontalmente
    backgroundColor: 'white', // Fundo branco
    borderRadius: 100, // Borda redonda (ajuste conforme necessário)
    overflow: 'hidden', // Garante que a borda redonda seja aplicada corretamente
    marginTop: 20, // Espaço superior para centralizar a imagem
    marginBottom: 20,
  },
  imagemContainer: {
    width: 220, // Ajuste conforme necessário
    height: 200, // Ajuste conforme necessário
    overflow: 'hidden',
    borderRadius: 100, // A metade da largura/altura para tornar a imagem circular
  },
  imagem: {
    width: '100%',
    height: '100%',
    borderRadius: 100, // A metade da largura/altura para tornar a imagem circular
    resizeMode: 'cover',
  },
})
