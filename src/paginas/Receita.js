import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from '../componentes/Botao'
import axios from 'axios';

const Receita = ({ route, navigation }) => {
    const [pagina, setPagina] = React.useState(null);
    const id = route.params.id;
    let url = `http://localhost:3000/paginas/${id}`;


    React.useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setPagina(response.data)
            })
            .catch((error) => {
                alert('Desculpe, aconteceu algo de errado, contate o suporte se o problema persistir')
        });
    });

    if (!pagina) return null;

    return (

        <View style={estilos.container}>
            <View style={estilos.logo}>
                <Text style={estilos.titulo}>{ pagina.titulo }</Text>

                    <Text style={estilos.texto}>{pagina.tempo }    {pagina.porcao } </Text>

                <Text>{pagina.ingredientes }</Text>
            </View>

            <View>
                <Botao titulo="Voltar" acao={() => navigation.goBack()} />
            </View>
        </View>

    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    logo: {
        marginLeft: 20,
        marginBottom: 20,
    },

    titulo: {
        fontSize: "2em",
        fontFamily: "Arial",
        color: "#8904B1",
        fontWeight: "bold",
    },
    texto:{
        color: "#8904B1",
        fontSize: "0.8em",
        marginBottom: 10,
    },
});

export default Receita;