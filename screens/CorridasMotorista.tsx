import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const CorridasMotorista = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.corridasMotorista}>
      <Image
        style={styles.bordasIcon}
        contentFit="cover"
        source={require("../assets/bordas.png")}
      />
      <Text style={[styles.ttulo, styles.ttuloTypo]}>SERVIÇOS</Text>
      <Text style={[styles.ttulo1, styles.ttuloTypo]}>HISTÓRICO</Text>
      <View style={[styles.nomes, styles.nomesPosition]}>
        <Image
          style={[styles.image28Icon, styles.image28IconLayout]}
          contentFit="cover"
          source={require("../assets/image-28.png")}
        />
        <Image
          style={[styles.image28Icon1, styles.image28IconLayout]}
          contentFit="cover"
          source={require("../assets/image-28.png")}
        />
        <Image
          style={[styles.image28Icon2, styles.image28IconLayout]}
          contentFit="cover"
          source={require("../assets/image-28.png")}
        />
        <Image
          style={[styles.image28Icon3, styles.image28IconLayout]}
          contentFit="cover"
          source={require("../assets/image-28.png")}
        />
        <Text style={[styles.giovanaZucareli, styles.robertoTypo]}>
          GIOVANA ZUCARELI
        </Text>
        <Text style={[styles.gabrielBarbosa, styles.robertoTypo]}>
          GABRIEL BARBOSA
        </Text>
        <Text style={[styles.andreyPrado, styles.robertoTypo]}>
          ANDREY PRADO
        </Text>
        <Text style={[styles.roberto, styles.robertoTypo]}>ROBERTO</Text>
      </View>
      <View style={[styles.locais, styles.nomesPosition]}>
        <Image
          style={[styles.image28Icon, styles.image28IconLayout]}
          contentFit="cover"
          source={require("../assets/image-29.png")}
        />
        <Image
          style={[styles.image28Icon1, styles.image28IconLayout]}
          contentFit="cover"
          source={require("../assets/image-29.png")}
        />
        <Image
          style={[styles.image28Icon2, styles.image28IconLayout]}
          contentFit="cover"
          source={require("../assets/image-29.png")}
        />
        <Image
          style={[styles.image28Icon3, styles.image28IconLayout]}
          contentFit="cover"
          source={require("../assets/image-29.png")}
        />
        <Text style={[styles.gasolina5l, styles.recargaTypo]}>
          GASOLINA - 5L
        </Text>
        <Text style={[styles.recargaDeBateria, styles.recargaTypo]}>
          RECARGA DE BATERIA
        </Text>
        <Text style={[styles.recargaDeBateria1, styles.recargaTypo]}>
          RECARGA DE BATERIA
        </Text>
        <Text style={[styles.gasolina2l, styles.recargaTypo]}>
          GASOLINA - 2L
        </Text>
      </View>
      <Pressable
        style={styles.seta}
        onPress={() => navigation.navigate("PerfilMotorista")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/seta.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ttuloTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    height: "3.75%",
    position: "absolute",
  },
  nomesPosition: {
    height: 189,
    top: 243,
    position: "absolute",
  },
  image28IconLayout: {
    height: 20,
    width: 20,
    left: 0,
    position: "absolute",
  },
  robertoTypo: {
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    left: "17.46%",
    width: "82.54%",
    height: "4.76%",
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  recargaTypo: {
    left: "17.09%",
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    height: "4.76%",
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  bordasIcon: {
    height: "118.13%",
    width: "117.78%",
    top: "-8.12%",
    right: "-10.28%",
    bottom: "-10%",
    left: "-7.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ttulo: {
    width: "42.22%",
    top: "24.53%",
    left: "28.89%",
    fontSize: FontSize.size_6xl,
    letterSpacing: 2.5,
    lineHeight: 30,
    color: Color.colorGray_600,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    height: "3.75%",
  },
  ttulo1: {
    width: "27.78%",
    top: "29.69%",
    left: "36.11%",
    fontSize: FontSize.size_mini,
    letterSpacing: 1.5,
    lineHeight: 18,
    color: "rgba(179, 28, 28, 0.8)",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    height: "3.75%",
  },
  image28Icon: {
    top: 0,
  },
  image28Icon1: {
    top: 57,
  },
  image28Icon2: {
    top: 112,
  },
  image28Icon3: {
    top: 169,
  },
  giovanaZucareli: {
    top: "2.65%",
  },
  gabrielBarbosa: {
    top: "32.8%",
  },
  andreyPrado: {
    top: "61.9%",
  },
  roberto: {
    top: "92.06%",
  },
  nomes: {
    left: 30,
    width: 126,
  },
  gasolina5l: {
    width: "77.22%",
    left: "17.09%",
    top: "2.65%",
  },
  recargaDeBateria: {
    width: "77.22%",
    left: "17.09%",
    top: "32.8%",
  },
  recargaDeBateria1: {
    width: "77.22%",
    left: "17.09%",
    top: "61.9%",
  },
  gasolina2l: {
    width: "82.91%",
    top: "92.06%",
  },
  locais: {
    left: 177,
    width: 158,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  seta: {
    left: 15,
    top: 505,
    width: 30,
    height: 30,
    position: "absolute",
  },
  corridasMotorista: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default CorridasMotorista;
