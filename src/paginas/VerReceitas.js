import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

import Pagina from '../componentes/Pagina';

const VerReceitas = ({ navigation }) => {
    const [paginas, setPaginas] = React.useState(null);

    let url = "http://localhost:3000/paginas/";

    React.useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                // 'then' executa depois que a requisição acaba
                setPaginas(response.data);
            })
            .catch((error) => {
                // 'catch' executa quando acontece um erro
                alert('Desculpe, deu errado.');
            })
    }, []);

    if (!paginas) return null;

    const listaPaginas = paginas.map( receitas =>
        <Pagina key={receitas.id} pagina={receitas} navigation={navigation} />
    );

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Minha Receitas</Text>

            <View style={estilos.paginas}>
                {listaPaginas}
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    titulo: {
        fontSize: "2em",
        fontFamily: "Arial",
        color: "#8904B1",
        fontWeight: "bold",
        textAlign: "center",
    },
    paginas: {
        display: "flex",
        gap: 10,
        padding: 10,
    }
});

export default VerReceitas;