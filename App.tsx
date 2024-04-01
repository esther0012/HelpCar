const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import TelaInicial from "./screens/TelaInicial";
import CorridasMotorista from "./screens/CorridasMotorista";
import PerfilMotorista from "./screens/PerfilMotorista";
import InformaesMotorista from "./screens/InformaesMotorista";
import CadastroMotorista from "./screens/CadastroMotorista";
import CadastroMotorista1 from "./screens/CadastroMotorista1";
import CadastroMotorista2 from "./screens/CadastroMotorista2";
import CadastroMotorista3 from "./screens/CadastroMotorista3";
import CadastroMotorista4 from "./screens/CadastroMotorista4";
import PerfilMotorista1 from "./screens/PerfilMotorista1";
import MensagemPedinte from "./screens/MensagemPedinte";
import FinalizaoPedinte from "./screens/FinalizaoPedinte";
import FinalizaoPedinte1 from "./screens/FinalizaoPedinte1";
import InformaesPedinte from "./screens/InformaesPedinte";
import PerfilPedinte from "./screens/PerfilPedinte";
import LocalizaoPedinte from "./screens/LocalizaoPedinte";
import CadastroPedinte from "./screens/CadastroPedinte";
import CadastroPedinte1 from "./screens/CadastroPedinte1";
import CadastroPedinte2 from "./screens/CadastroPedinte2";
import CadastroPedinte3 from "./screens/CadastroPedinte3";
import CadastroPedinte4 from "./screens/CadastroPedinte4";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "NunitoSans12pt-Light": require("./assets/fonts/NunitoSans12pt-Light.ttf"),
    "NunitoSans12pt-Regular": require("./assets/fonts/NunitoSans12pt-Regular.ttf"),
    "NunitoSans12pt-Bold": require("./assets/fonts/NunitoSans12pt-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="TelaInicial"
              component={TelaInicial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CorridasMotorista"
              component={CorridasMotorista}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilMotorista"
              component={PerfilMotorista}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InformaesMotorista"
              component={InformaesMotorista}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroMotorista"
              component={CadastroMotorista}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroMotorista1"
              component={CadastroMotorista1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroMotorista2"
              component={CadastroMotorista2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroMotorista3"
              component={CadastroMotorista3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroMotorista4"
              component={CadastroMotorista4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilMotorista1"
              component={PerfilMotorista1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MensagemPedinte"
              component={MensagemPedinte}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FinalizaoPedinte"
              component={FinalizaoPedinte}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FinalizaoPedinte1"
              component={FinalizaoPedinte1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InformaesPedinte"
              component={InformaesPedinte}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilPedinte"
              component={PerfilPedinte}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LocalizaoPedinte"
              component={LocalizaoPedinte}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroPedinte"
              component={CadastroPedinte}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroPedinte1"
              component={CadastroPedinte1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroPedinte2"
              component={CadastroPedinte2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroPedinte3"
              component={CadastroPedinte3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroPedinte4"
              component={CadastroPedinte4}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
