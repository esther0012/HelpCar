import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TelaInicial from "../screens/TelaInicial";
import CadastroPedinte1 from "../screens/CadastroPedinte1";
import CadastroMotorista from "../screens/CadastroMotorista";
import CorridasMotorista from "../screens/CorridasMotorista";
import FinalizaoPedinte from "../screens/FinalizaoPedinte";
import finalizaoPedinte1 from "../screens/FinalizaoPedinte1";
import informaesPedinte from "../screens/InformaesPedinte";
import informaesMotorista from "../screens/InformaesMotorista";
import localizaoPedinte from "../screens/LocalizaoPedinte";
import mensagemPedinte from "../screens/MensagemPedinte";
import perfilPedinte from "../screens/PerfilPedinte";
import perfilMotorista from "../screens/PerfilMotorista";
import perfilMotorista1 from "../screens/PerfilMotorista1";

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TelaInicial" component={TelaInicial}/>
                <Stack.Screen name="CadastroPedinte1" component={CadastroPedinte}/>
                <Stack.Screen name="CadastroPedinte1" component={CadastroPedinte1}/>
                <Stack.Screen name="CadastroPedinte1" component={CadastroPedinte2}/>
                <Stack.Screen name="CadastroPedinte1" component={CadastroPedinte3}/>
                <Stack.Screen name="CadastroPedinte1" component={CadastroPedinte4}/>
                <Stack.Screen name="CadastroPedinte1" component={CadastroMotorista}/>
                <Stack.Screen name="CadastroPedinte1" component={CadastroPedinte1}/>
                <Stack.Screen name="CadastroPedinte1" component={CadastroPedinte2}/>
                <Stack.Screen name="CadastroPedinte1" component={CadastroPedinte3}/>
                <Stack.Screen name="CadastroPedinte1" component={CadastroPedinte4}/>
                <Stack.Screen name="CadastroPedinte1" component={CorridasMotorista}/>
                <Stack.Screen name="CadastroPedinte1" component={FinalizaoPedinte}/>
                <Stack.Screen name="CadastroPedinte1" component={finalizaoPedinte1}/>
                <Stack.Screen name="CadastroPedinte1" component={informaesPedinte}/>
                <Stack.Screen name="CadastroPedinte1" component={informaesMotorista}/>
                <Stack.Screen name="CadastroPedinte1" component={localizaoPedinte}/>
                <Stack.Screen name="CadastroPedinte1" component={mensagemPedinte}/>
                <Stack.Screen name="CadastroPedinte1" component={perfilPedinte}/>
                <Stack.Screen name="CadastroPedinte1" component={perfilMotorista}/>
                <Stack.Screen name="CadastroPedinte1" component={perfilMotorista1}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
