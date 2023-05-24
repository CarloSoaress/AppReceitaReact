import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Paginas
import Inicial from './src/paginas/Inicial';
import Escolha from './src/paginas/Escolha';
import AdicionarReceita from './src/paginas/AdicionarReceita';
import VerReceitas from './src/paginas/VerReceitas';
import Receita from './src/paginas/Receita';

const Pilha = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen name="Inicial" component={Inicial} />
                <Pilha.Screen name="Escolha" component={Escolha} />
                <Pilha.Screen name="AdicionarReceita" component={AdicionarReceita} />
                <Pilha.Screen name="VerReceitas" component={VerReceitas} />
                <Pilha.Screen name="Receita" component={Receita} />
            </Pilha.Navigator>
        </NavigationContainer>
    );
}