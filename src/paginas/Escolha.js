import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Botao from '../componentes/Botao';

const Escolha = ({ navigation }) => {

  return (
    <View style={estilos.main}>
      <ImageBackground source={require('../img/map.jpg')} resizeMode="cover" style={estilos.background}>
        <View style={estilos.container}>
          <Text style={estilos.titulo}>Viagens</Text>
          <View style={estilos.containerBotoes}>
            <Botao style={estilos.botao} titulo="Adicionar novo registro" acao={() => navigation.navigate('AdicionarRegistro')} />
            <Botao style={estilos.botao} titulo="Registros salvos" acao={() => navigation.navigate('VerReregistros')} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );

}

const estilos = StyleSheet.create({
    
    main:{
        width: "100%",
        height: "100%",
    },
    background:{
        justifyContent: "center",
        display: "flex",
        alignItems:"center",
        width: "100%",
        height: "100%",
    },
    container: {
        padding: 30,
        borderRadius: 10,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        margin: 10,
        height: 325,
    },
    ContainerBotoes: {
        display: "flex",
        flex: 2,
        gap: 10,
    },
    titulo: {
        fontSize: "3em",
        fontFamily: "Arial",
        color: "#8904B1",
        fontWeight: "bold",
        marginBottom: 15,
    },

});

export default Escolha;
