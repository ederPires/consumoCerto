import React, { useState, useRef } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Keyboard, Modal, Image  } from 'react-native'

import Detalhes from './src/Modal'

export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');
  const inputRef = useRef(null) //referência
  const [visibleModal, setVisibleModal] = useState(false);
  const [dadosParaModal, setDadosParaModal] = useState(null)

  function limpar (){
    setAlcool('')
    setGasolina('')
    setResultado('')

    //clicando em limpar o cursos aparece no input
    inputRef.current.focus()
  }

  const fecharModal = () => {
    setVisibleModal(false);
    limpar()
  };

  const formatarMoedaBRL = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  function calcular() {
    if (alcool && gasolina) {
      const calc = alcool / gasolina;

      const resultadoAtualizado = calc < 0.7 ? 'Compensa usar Álcool' : 'Compensa usar Gasolina';

      setDadosParaModal({
        alcool: formatarMoedaBRL(alcool),
        gasolina: formatarMoedaBRL(gasolina),
        resultado: resultadoAtualizado,
      });

      setVisibleModal(true);
    } else {
      alert('Preencha todos os campos para continuar');
    }
  }



    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.areaImagem}>
          <View style={styles.imagemContainer}>
            <Image
              source={require('./src/assets/gas-bomb.png')}
              style={styles.imagem}
            />
          </View>
        </View>

        <View style={styles.areaTitulo}>
          <Text style={styles.textTitulo}>Qual melhor opção?</Text>
        </View>

        <View style={styles.areaInput}>
          <View style={styles.areaLabel}>
            <Text style={styles.inputLabel}>Álcool (preço por litro):</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Ex: 4.60"
            value={alcool}
            onChangeText={setAlcool}
            keyboardType='numeric'
            ref={inputRef}
            />
          <View style={styles.areaLabel}>
            <Text style={styles.inputLabel}>Gasolina (preço por litro):</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Ex: 7.30"
            value={gasolina}
            onChangeText={setGasolina}
            keyboardType='numeric'
            />
        </View>

        <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, {backgroundColor: '#1d75cd'}]}
          activeOpacity={0.7}
          onPress={calcular}
          >
          <Text style={styles.botaoText}>Calcular</Text>
        </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.7}
            onPress={limpar}
            >
            <Text style={styles.botaoText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <Modal animationType="slide-up" visible={visibleModal}>
          <Detalhes  dados={dadosParaModal} fecharModal={fecharModal} />
        </Modal>

      </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa todo espaço disponivel
    backgroundColor: '#000'
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
  },
  imagemContainer: {
    width: 175, // Ajuste conforme necessário
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
  areaTitulo:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    marginTop: 20
  },
  textTitulo:{
    fontSize:25,
    color: '#FFF'
  },
  areaInput:{
    alignItems: 'center',
    //alignItems: 'flex-start', // Isso alinha o componente filho (Text)
    justifyContent: 'center',
    marginBottom: 15,
  },
  areaLabel: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '90%', // Define a largura para ocupar 90% da largura do componente pai
    marginTop: 1,
  },
  inputLabel: {
    color: '#FFF',
    marginBottom: 5,
    textAlign: 'left',
  },
  input:{
    backgroundColor: '#FFF', //cor interna
    borderWidth: 1, //borda
    borderColor: '#DDD', //cor borda
    borderRadius: 5, //borda arredondada
    width: '90%', //largura
    padding: 10, //distância interna
    fontSize: 18 //tamanho da fonte
  },
  areaBtn:{
    alignItems: 'center', //centralizar verticalmente
    marginTop: 15,
    justifyContent: 'center' //espaço entre botões
  },
  botao:{
    backgroundColor: '#cd3e1d',
    height: 70,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15
  },
  botaoText:{
    fontSize: 22,
    color: '#FFF'
  },

});
