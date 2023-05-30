import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, StyleSheet } from 'react-native';
import Botao from '../componentes/Botao';
import axios from 'axios';

const AdicionarRegistro = ({ navigation }) => {
  const [paisOuRegiao, setPaisOuRegiao] = useState("");
  const [horarioDeSaida, setHorarioDeSaida] = useState("");
  const [horarioDeChegada, setHorarioDeChegada] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const salvar = () => {
     // Criar uma requisão usando o axios para o servidor
    let url = "http://localhost:3000/paginas";

    let informacoes = {
      paisouregiao: paisOuRegiao,
      horariodesaida: horarioDeSaida,
      horariodechegada: horarioDeChegada,
      Observacoes: Observacoes
    };

    axios
      .post(url, informacoes)
      .then((response) => {
        let id = response.data.id;
        navigation.navigate('Registros', { id: id });
      })
      .catch((error) => {
        alert('Desculpe, deu errado.');
      });
  };

  return (
    <ImageBackground source={require('../img/map.jpg')} resizeMode="cover" style={estilos.background}>
      <View style={estilos.container}>
        <Text style={estilos.titulo}>Adicionar Registro de Viagem</Text>

        <TextInput style={estilos.campo} placeholder="Pais ou regiao" value={paisOuRegiao} onChangeText={setPaisOuRegiao} />

        <TextInput style={estilos.campo} placeholder="Horario de saida" value={horarioDeSaida} onChangeText={setHorarioDeSaida} />

        <TextInput style={estilos.campo} placeholder="Horario de chegada" value={horarioDeChegada} onChangeText={setHorarioDeChegada} />

        <TextInput style={estilos.campo} placeholder="Observações" multiline numberOfLines={20} value={observacoes} onChangeText={setObservacoes} />

        <Botao titulo="Salvar" acao={salvar} />
      </View>
    </ImageBackground>
  );
};

const estilos = StyleSheet.create({
    background:{
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
    },
    container: {
        width: "90%",
        marginTop: 10,
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        padding: 20,
    },
    campo: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#cecece",
        borderRadius: 2,
        backgroundColor: "#fff"
    },
    titulo: {
        fontSize: "2em",
        fontFamily: "Arial",
        color: "#8904B1",
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
});

export default AdicionarRegistro;
