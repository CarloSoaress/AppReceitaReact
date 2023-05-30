import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Paginas
import Inicial from './src/paginas/Inicial';
import Escolha from './src/paginas/Escolha';
import AdicionarRegistro from './src/paginas/AdicionarRegistro';
import VerReceitas from './src/paginas/VerRegistros';
import Registros from './src/paginas/Registros';

const Pilha = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen name="Inicial" component={Inicial} />
                <Pilha.Screen name="Escolha" component={Escolha} />
                <Pilha.Screen name="AdicionarRegistro" component={AdicionarRegistro} />
                <Pilha.Screen name="Registros" component={VerReceitas} />
                <Pilha.Screen name="Registros" component={Registros} />
            </Pilha.Navigator>
        </NavigationContainer>
    );
}