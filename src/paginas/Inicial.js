import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Botao from '../componentes/Botao'

const Inicial = ({ navigation }) => {

    return (
        <View style={estilos.main}>
            <ImageBackground source={require('../img/varias_comidas.jpg')} resizeMode="cover" style={estilos.background}>
                <View style={estilos.container}>

                    <Text style={estilos.titulo}>Receitas</Text>

                    <Image style={estilos.img_logo} source={require('../img/icon_receita.png')}/>
                    <View style={estilos.ContainerBotoes}>
                        <Botao style={estilos.botoes} titulo="Começar" acao={ () => navigation.navigate('Escolha') } />
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
    img_logo:{
        height: 100,
        width: 100,
    },
    background:{
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
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
        justifyContent: "center",
        flex: 2,
        gap: 10,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: "3em",
        color: "#8904B1",
        fontFamily: "Arial",
    },

});

export default Inicial;