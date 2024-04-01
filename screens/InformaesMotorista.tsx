import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const InformaesMotorista = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.informaesMotorista}>
      <Image
        style={styles.bordasIcon}
        contentFit="cover"
        source={require("../assets/bordas1.png")}
      />
      <View style={styles.opes}>
        <Text style={[styles.servioPrestado, styles.iconLayout]}>
          SERVIÇOS DISPONÍVEIS
        </Text>
      </View>
      <Pressable
        style={styles.seta}
        onPress={() => navigation.navigate("CadastroMotorista")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/seta.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
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
  servioPrestado: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_6xl,
    letterSpacing: 1.3,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoSans12ptBold,
    color: Color.colorGray_600,
    textAlign: "left",
    position: "absolute",
  },
  opes: {
    height: "2.66%",
    width: "95.83%",
    top: "22.97%",
    right: "-1.94%",
    bottom: "74.38%",
    left: "6.11%",
    position: "absolute",
  },
  seta: {
    left: 15,
    top: 505,
    width: 30,
    height: 30,
    position: "absolute",
  },
  informaesMotorista: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default InformaesMotorista;
