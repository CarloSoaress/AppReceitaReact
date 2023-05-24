import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Pagina = ({ pagina, navigation }) => {

    return (
        <TouchableOpacity onPress={ () => navigation.navigate('Receita', {id: pagina.id}) }>
                <View style={estilos.cartao}>
                    <Text style={estilos.titulo}>{ pagina.titulo }</Text>
                </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    cartao: {
        border: "1px solid #8904B1",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        display: "flex",
        elevation: 2,
        boxShadow: "0px 2px 2px #ccc",
    },
    titulo: {
        fontSize: "1.5em",
        fontFamily: "Arial",
        color: "#8904B1",
        fontWeight: "bold",
    },
});

export default Pagina;