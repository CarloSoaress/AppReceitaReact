import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Botao from '../componentes/Botao'

const Escolha = ({ navigation }) => {

    return (

        <View style={estilos.main}>
            <ImageBackground source={require('../img/varias_comidas.jpg')} resizeMode="cover" style={estilos.background}>
                <View style={estilos.container}>

                    <Text style={estilos.titulo}>Receitas</Text>

                    <View style={estilos.ContainerBotoes}>
                        <Botao style={estilos.botoes} titulo="Adicionar nova receita" acao={ () => navigation.navigate('AdicionarReceita') } />
                        <Botao style={estilos.botoes} titulo="Receitas salvas" acao={ () => navigation.navigate('VerReceitas') } />
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