import React, { useState, useRef } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Keyboard  } from 'react-native'


export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const inputRef = useRef(null) //referência

  function limpar (){
    setAlcool('')
    setGasolina('')
    //clicando em limpar o cursos aparece no input
    inputRef.current.focus()
  }

  function calcular(){
    //let alcool = parseFloat(alcool);
    //let gasolina = parseFloat(gasolina);

    const resultado = (alcool / gasolina)

    console.log(resultado)

    if(resultado < 0.7){
      console.log("Melhor alcool!")
    } else{
      console.log("Melhor gasolina!")
    }
  }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.areaTitulo}>
          <Text style={styles.textTitulo}>Qual melhor opção?</Text>
        </View>

        <View style={styles.areaInput}>
          <Text style={styles.inputLabel}>Álcool (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 4.60"
            value={alcool}
            onChangeText={setAlcool}
            keyboardType='numeric'
            ref={inputRef}
            />

          <Text style={styles.inputLabel}>Gasolina (preço por litro):</Text>
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
          style={[styles.botao, {backgroundColor: '#1d75cd'}]} activeOpacity={0.7}
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

      </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa todo espaço disponivel
    backgroundColor: '#000'
  },
  areaTitulo:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 45,
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
  },
  inputLabel:{
    color: '#FFF',
    marginBottom: 5,
    textAlign: 'left', // Isso alinha o texto à esquerda
    //alignItems: 'flex-start',
    justifyContent: 'center'
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
