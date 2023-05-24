import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput,  StyleSheet } from 'react-native';
import Botao from '../componentes/Botao';
import axios from 'axios';

const AdicionarReceita = ({ navigation }) => {
    const [titulo, setTitulo] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [tempo, setTempo] = useState("");
    const [porcao, setPorcao] = useState("");

    const salvar = () => {
        // Criar uma requisão usando o axios para o servidor
        let url = "http://localhost:3000/paginas";

        let informacoes = {
            titulo: titulo,
            ingredientes: ingredientes,
            tempo: tempo,
            porcao: porcao
        };

        axios
            .post(url, informacoes)
            .then((response) => {
                let id = response.data.id;
                navigation.navigate('Receita', {id: id})
            })
            .catch((error) => {
                alert('Desculpe, deu errado.');
            });
    }

    return (
        <ImageBackground source={require('../img/varias_comidas.jpg')} resizeMode="cover" style={estilos.background}>
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Adicionar receita</Text>

                <TextInput style={estilos.campo} placeholder="Nome da receita" value={ titulo } onChangeText={ setTitulo }/>

                <TextInput style={estilos.campo} placeholder='Tempo' editable value={ tempo } onChangeText={ setTempo} />
                
                <TextInput style={estilos.campo} placeholder='Porcões' editable value={ porcao } onChangeText={ setPorcao} />

                <TextInput style={estilos.campo} placeholder='Ingredientes' multiline numberOfLines={ 20 } editable value={ ingredientes } onChangeText={ setIngredientes } />

                <Botao titulo="Salvar" acao={salvar} />
            </View>
        </ImageBackground>
    );
}

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
    }

});

export default AdicionarReceita;