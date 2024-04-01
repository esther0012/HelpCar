import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const FinalizaoPedinte1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.finalizaoPedinte}>
      <Pressable
        style={styles.seta}
        onPress={() => navigation.navigate("InformaesPedinte")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/seta.png")}
        />
      </Pressable>
      <View style={styles.motorista}>
        <Text style={[styles.claudioBernardoCampo, styles.oTotalDoTypo]}>
          CLAUDIO BERNARDO CAMPO
        </Text>
        <Image
          style={styles.fotoPerfilIcon}
          contentFit="cover"
          source={require("../assets/foto-perfil.png")}
        />
        <Pressable
          style={[styles.icon01, styles.iconLayout]}
          onPress={() => navigation.navigate("MensagemPedinte")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon-01.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.icon02, styles.iconLayout]}
          onPress={() => navigation.navigate("PerfilMotorista1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon-02.png")}
          />
        </Pressable>
      </View>
      <View style={styles.superior}>
        <Text style={[styles.suaSolicitao, styles.r6550Typo]}>
          Sua Solicitação
        </Text>
        <Text style={[styles.r6550, styles.r6550Typo]}>R$ 65.50</Text>
        <Text style={[styles.oTotalDo, styles.oTotalDoTypo]}>
          O TOTAL DO SERVIÇO FOI
        </Text>
        <Pressable
          style={styles.superiorChild}
          onPress={() => navigation.navigate("FinalizaoPedinte")}
        />
        <Text style={[styles.servioCompleto, styles.deOutubro2021Typo]}>
          SERVIÇO COMPLETO
        </Text>
        <Text style={[styles.deOutubro2021, styles.deOutubro2021Typo]}>
          20 de Outubro, 2021 às 12:37
        </Text>
        <Text style={[styles.minutosParaChegar, styles.deOutubro2021Typo]}>
          05 MINUTOS PARA CHEGAR
        </Text>
        <Image
          style={styles.superiorItem}
          contentFit="cover"
          source={require("../assets/line-29.png")}
        />
      </View>
      <Image
        style={styles.bordasIcon}
        contentFit="cover"
        source={require("../assets/bordas3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  oTotalDoTypo: {
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    top: 101,
    position: "absolute",
  },
  r6550Typo: {
    height: "9.84%",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  deOutubro2021Typo: {
    lineHeight: 12,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
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
  claudioBernardoCampo: {
    top: 78,
    left: 0,
    width: 178,
  },
  fotoPerfilIcon: {
    top: 0,
    left: 54,
    borderRadius: Border.br_473xl,
    width: 70,
    height: 70,
    position: "absolute",
  },
  icon01: {
    left: 99,
  },
  icon02: {
    left: 59,
  },
  motorista: {
    top: 361,
    left: 91,
    height: 121,
    width: 178,
    position: "absolute",
  },
  suaSolicitao: {
    width: "65.56%",
    top: "0%",
    left: "20.83%",
    fontSize: 30,
    letterSpacing: 1.5,
    lineHeight: 36,
    color: Color.colorGray_600,
  },
  r6550: {
    width: "52.5%",
    top: "27.6%",
    left: "23.61%",
    fontSize: 40,
    letterSpacing: 2,
    lineHeight: 48,
    color: Color.colorBlack,
  },
  oTotalDo: {
    top: 79,
    left: 75,
    letterSpacing: 1.2,
    width: 209,
  },
  superiorChild: {
    top: 339,
    left: 104,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorCornflowerblue,
    width: 152,
    height: 27,
    position: "absolute",
  },
  servioCompleto: {
    top: 347,
    left: 121,
    fontWeight: "300",
    fontFamily: FontFamily.nunitoSans12ptLight,
    width: 117,
    color: Color.colorBlack,
  },
  deOutubro2021: {
    top: 154,
    left: 96,
    width: 167,
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
  },
  minutosParaChegar: {
    top: 59,
    color: Color.colorDodgerblue_300,
    width: 162,
    left: 99,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
  },
  superiorItem: {
    top: 189,
    width: 360,
    height: 1,
    left: 0,
    position: "absolute",
  },
  superior: {
    height: "57.19%",
    top: "24.06%",
    right: "0%",
    bottom: "18.75%",
    left: "0%",
    position: "absolute",
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
  finalizaoPedinte: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default FinalizaoPedinte1;
