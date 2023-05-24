import React from 'react';
import {Text, StyleSheet, TouchableOpacity } from 'react-native';

const Botao = ({titulo, acao}) => {

    return (
        <TouchableOpacity style={estilos.botao} onPress={acao}>
            <Text style={estilos.texto}>{titulo}</Text>
        </TouchableOpacity>
    );

}

const estilos = StyleSheet.create({

    botao: {
        borderWidth: 1,
        backgroundColor: "#8904B1",
        padding: 10,
        borderColor: "#cecece",
        borderRadius: 5,
    },
    texto: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#fff",
        fontSize: "130%",
    },
    
});
export default Botao;