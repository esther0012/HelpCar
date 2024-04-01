import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TelaInicial = () => {
  return (
    <View style={styles.telaInicial}>
      <View style={[styles.fundoTela, styles.fundoTelaLayout]}>
        <View style={styles.ttulo}>
          <Text style={styles.quandoPrecisarVoc}>{`Quando precisar,
você tem a`}</Text>
          <Text style={[styles.helpcar, styles.helpcarTypo]}>HELPCAR</Text>
          <Text style={[styles.subttulo, styles.helpcarTypo]}>
            PRECISANDO DE UM HELP?
          </Text>
        </View>
        <Image
          style={[styles.image32Icon, styles.fundoTelaLayout]}
          contentFit="cover"
          source={require("../assets/image-32.png")}
        />
      </View>
      <View style={[styles.sejaUmHelp, styles.cadastroLayout]}>
        <Text style={[styles.sejaUmHelp1, styles.sejaUmHelp1Typo]}>
          SEJA UM HELP
        </Text>
      </View>
      <View style={[styles.cadastroPedinte, styles.cadastroLayout]}>
        <Image
          style={[styles.cadastroPedinteChild, styles.cadastroLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Text style={[styles.soliciteUmServio, styles.sejaUmHelp1Typo]}>
          SOLICITE UM SERVIÇO
        </Text>
      </View>
      <View style={styles.loginInfo}>
        <Text style={styles.login}>Login</Text>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Image
          style={[styles.informaesBtndireitoIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/informaes-btndireito.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fundoTelaLayout: {
    width: 485,
    position: "absolute",
  },
  helpcarTypo: {
    color: Color.typographyText1,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  cadastroLayout: {
    height: 45,
    width: 239,
    position: "absolute",
  },
  sejaUmHelp1Typo: {
    fontFamily: FontFamily.nunitoSans12ptRegular,
    lineHeight: 24,
    fontSize: FontSize.size_lg,
    color: Color.typographyText1,
    textAlign: "left",
  },
  iconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  quandoPrecisarVoc: {
    top: "0%",
    letterSpacing: 2.5,
    color: Color.colorDodgerblue_100,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.size_6xl,
    left: "0%",
    position: "absolute",
  },
  helpcar: {
    height: "9.49%",
    width: "76.81%",
    top: "13.63%",
    fontSize: 35,
    lineHeight: 42,
    color: Color.typographyText1,
    left: "0%",
  },
  subttulo: {
    height: "9.25%",
    width: "87.32%",
    top: "90.75%",
    left: "12.68%",
    lineHeight: 28,
    fontSize: FontSize.size_6xl,
    color: Color.typographyText1,
  },
  ttulo: {
    left: 105,
    width: 276,
    height: 411,
    top: 0,
    position: "absolute",
  },
  image32Icon: {
    top: 112,
    height: 331,
    left: 0,
  },
  fundoTela: {
    top: 48,
    left: -62,
    height: 443,
  },
  sejaUmHelp1: {
    width: 130,
  },
  sejaUmHelp: {
    top: 568,
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    borderStyle: "solid",
    borderColor: Color.colorCornflowerblue,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: 10,
    borderRadius: Border.br_3xs,
    height: 45,
    width: 239,
    left: 61,
  },
  cadastroPedinteChild: {
    borderRadius: Border.br_3xs,
    height: 45,
    width: 239,
    left: 0,
    top: 0,
  },
  soliciteUmServio: {
    top: 11,
    left: 24,
    position: "absolute",
  },
  cadastroPedinte: {
    top: 506,
    left: 61,
  },
  login: {
    left: 227,
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    color: Color.typographyText1,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  icon: {
    left: 0,
    top: 0,
  },
  informaesBtndireitoIcon: {
    top: 1,
    left: 300,
    overflow: "hidden",
  },
  loginInfo: {
    top: 15,
    left: 17,
    width: 320,
    height: 22,
    position: "absolute",
  },
  telaInicial: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default TelaInicial;
